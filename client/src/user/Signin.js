import React,{useState} from 'react'
import { toast } from "react-toastify";
import {authenticate, isAuthenticated, login} from '../auth'
import {Link, Redirect} from 'react-router-dom'
import '../user/signin.css'

const Signin = () => {

  const [values, setValues] = useState({ 
    email:'',
    password:'',
    error:'',
   loading:false,
   redirectRefer:false,
  //  message:'',
  //  loading:false,
  //  success:false
  });
  const { email, password, redirectRefer } = values;
  const {user} = isAuthenticated()


  const handleChange = name => event => {
      setValues({ ...values, error: false, [name]: event.target.value });
  };


  const clickSubmit = async event =>{
  event.preventDefault();
  
    setValues({ ...values, error: false, loading:true });
    try {
      const data = await login({ email, password })   
      
            if (data.error) {
              if (data.error) toast.error(data.error);
                setValues({...values,loading: false, toast:data.error, success: false});
            } else {
              //use a callback function
              toast.success(data.message);
              authenticate(data, () =>{
                setValues({
                  ...values, 
                    success: true,
                    loading:false,
                  redirectRefer:true
              });
              })
            }
    } catch (err) {
      toast.error(err)
    }
     
  }
const loginForm = () => (
  <form className='signin-form'>

  <div className="form-group">
      <label className="text-muted">Email</label>
      <input onChange={handleChange('email')} type="email" className="form-control" autoFocus="off" autoComplete="off" value={email} />
  </div>

  <div className="form-group">
      <label className="text-muted">Password</label>
      <input onChange={handleChange('password')} type="password" className="form-control"  autoFocus="off" autoComplete="off" value={password} />
  </div>
  <button type="submit" onClick={clickSubmit}  className="btn btn-success">
      Submit
  </button>
  </form>
)


// const showLoading = () => (loading ? <div className="alert alert-info">loading...</div> : '')
// const showError = () => (
//   <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
//       {error}
//   </div>
// );

// const showSuccess = () => (
//   <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
//       {message} 
//   </div>
// );


        
        const redirect = () =>{
          if(redirectRefer){
            if (user && user.role === 1) {
              return <Redirect to="/admin/dashboard" />;
          } else {
              return <Redirect to="/user/dashboard" />;
          }
          }if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
        }

  return(
    <div className="container">
    <div className="col-md-8 offset-md-2">
      {loginForm()}
      {/* {showError()}
      {showLoading()} 
      {showSuccess()} */}
      {redirect()}
    </div>
      
    </div>
   )

 }

export default Signin