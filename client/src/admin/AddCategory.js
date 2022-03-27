import React,{useState} from 'react';
import { isAuthenticated } from '../auth';
import { createCategory } from './AdminApi';
import { Link } from 'react-router-dom'



const AddCategory = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [ category, setCategory ] = useState([])


  const {user, token} = isAuthenticated()

  const handleChange = (e) => {
      setError('')
      setName(e.target.value)
}

  const clickSubmit = async (e) => {
    e.preventDefault();
    setError('')
    setSuccess(false)
try {
     //make a request for creating category
  const data = await createCategory(user._id, token, {name})
   if(data.error){
       setError(data.error)
       
   }else{
       setError('')
       setSuccess(true)
       
   }
} catch (error) {
    console.log(error);
}
   
  }

  const newCategoryForm = () => (

    <form onSubmit={clickSubmit}>
   <label htmlFor="name">create category</label>
  <input type="text" className='form-control' value={name}
  onChange={handleChange} autoFocus />
  <button type='submit' className='btn-primary'>create</button>
    </form>
  )


  const showSuccess = () => {
    if (success) {
        return <h3 className="text-success">{name} is created</h3>;
    }
};

const showError = () => {
    if (error) {
        return <h3 className="text-danger">{error}</h3>;
    }
};

const goBack = () => (
    <div className="mt-5">
        <Link to="/admin/dashboard" className="text-warning">
            Back to Dashboard
        </Link>
    </div>
);
  return(
  <>
  <div className='row mt-5'>
      <div className="col-md-8 offset-md-2">
          {newCategoryForm()}
          {showError()}
          {showSuccess()}
          {goBack()}
      </div>
     
      
  </div>
  </>
  )
};

export default AddCategory;
