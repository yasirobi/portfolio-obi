import React,{useState} from 'react'
import {register} from '../auth'
import {Link} from 'react-router-dom'
import '../user/signup.css'
import { toast } from "react-toastify";




const Signup = () => {

  const [values, setValues] = useState({
    name:'',
    email:'',
    password:'',
    error:'',
    // success:false,
    // message:'',
    // loading:false,
  });
  const { name, email, password } = values;

  const handleChange = name => event => {
      setValues({ ...values, error: false, [name]: event.target.value });
  };


  const clickSubmit = async event =>{
    event.preventDefault();
    setValues({ ...values,loading:true, error: false });
    try {
      const data = await register({ name, email, password })   
      if (data.error) toast.error(data.error);
            if (data.error) {
                setValues({ ...values,loading: false, toast:data.error, success: false });
            } else {
              toast.success(data.message);
                setValues({
                    ...values,
                    name:'',
                    email: '',
                    password: '',
                    success: true,
                    loading:false,
                    
                });
            }
    } catch (err) {
      toast.error(err)
    }
     
       
  }
const registerForm = () => (
  <form className='signup-form'>
  <div className="form-group">
      <label className="text-muted">Name</label>
      <input onChange={handleChange('name')} type="text" className="form-control" autoFocus="off" autoComplete="off" value={name} />
  </div>
  

  <div className="form-group">
      <label className="text-muted">Email</label>
      <input onChange={handleChange('email')} type="email" className="form-control" autoFocus="off" autoComplete="off" value={email} />
  </div>

  <div className="form-group">
      <label className="text-muted">Password</label>
      <input onChange={handleChange('password')} type="password" className="form-control"  autoFocus="off" autoComplete="off" value={password} />
  </div>
  <button type="submit" onClick={clickSubmit} className="btn btn-primary">
      Submit
  </button>
  </form>
)




  return(
    <div className="container">
    <div className="col-md-8 offset-md-2">
      {registerForm()}
      
      
    </div>
      
    </div>
   )

 }

export default Signup