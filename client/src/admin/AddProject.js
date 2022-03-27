import React,{useState, useEffect} from 'react';
import { isAuthenticated } from '../auth';
import { createProject, getCategories } from './AdminApi';
import { Link } from 'react-router-dom'


const AddProject = () => {

  const [values, setValues] = useState({
    name: '',
    desc: '',
    link1: '',
    link2: '',
    categories: [],
    category: '',
    photo: '',
    body:'',
    loading: false,
    error: '',
    createdProject: '',
    redirectToProfile: false,
    formData: ''
});
const { user, token } = isAuthenticated();

const {
  name, categories, category,body, 
  link1, link2, desc,loading, error, 
  formData, redirectToProfile, createdProject
} = values


//load all categories
const init = async () => {
   const data = await getCategories()
   if (data.error) {
    setValues({ ...values, error: data.error });
} else {
    setValues({
        ...values,
        categories: data,
        formData: new FormData()
    });
}
}

useEffect(() => {
  init()
}, []);



const handleChange = name => event => {
  const value = name === 'photo' ? event.target.files[0] : event.target.value;
  formData.set(name, value);
  setValues({ ...values, [name]: value });
};


const clickSubmit = event => {
  event.preventDefault();
  setValues({ ...values, error: '', loading: true });

  createProject(user._id, token, formData).then(data => {
      if (data.error) {
          setValues({ ...values, error: data.error });
      } else {
          setValues({
              ...values,
              name: '',
              desc: '',
              photo: '',
              link1: '',
              link2: '',
              body:'',
              loading: false,
              createdProject: data.name
          });
      }
  });
};


const newPostForm = () => (
  <form className="mb-3" onSubmit={clickSubmit}>
      <h4>Post Photo</h4>
      <div className="form-group">
          <label className="btn btn-secondary">
              <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
          </label>
      </div>

      <div className="form-group">
          <label className="text-muted">Name</label>
          <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
      </div>

      <div className="form-group">
          <label className="text-muted">Description</label>
          <textarea onChange={handleChange('desc')} className="form-control" value={desc} />
      </div>

      <div className="form-group">
          <label className="text-muted">Price</label>
          <input onChange={handleChange('link2')} type="text" className="form-control" value={link2} />
      </div>

      <div className="form-group">
          <label className="text-muted">Category</label>
          <select onChange={handleChange('category')} className="form-control">
              <option>Please select</option>
              {
                 categories && categories.map((c, i) => {
                   return(
                     <option key={i} value={c._id}>{c.name}</option>
                   )
                 })
                  
                }
          </select>
      </div>

      <div className="form-group">
          <label className="text-muted">link1</label>
          <input onChange={handleChange('body')} type="text" className="form-control" value={body} />
      </div>

      <div className="form-group">
          <label className="text-muted">link1</label>
          <input onChange={handleChange('link1')} type="text" className="form-control" value={link1} />
      </div>

      <button className="btn-outline-primary">Create Project</button>
  </form>
);

const showError = () => (
  <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
      {error}
  </div>
);

const showSuccess = () => (
  <div className="alert alert-info" style={{ display: createdProject ? '' : 'none' }}>
      <h2>{`${createdProject}`} is created!</h2>
  </div>
);

const showLoading = () =>
  loading && (
      <div className="alert alert-success">
          <h2>Loading...</h2>
      </div>
  );


  return (
    <>
   <div className="container mt-5">
     <div className="row">
       <div className="col-md-8 offset-md-2">
       {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
       </div>
     </div>
   </div>

  </>
  ) 
};

export default AddProject;
