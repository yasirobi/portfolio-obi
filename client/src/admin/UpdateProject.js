import React,{useState, useEffect} from 'react';
import { isAuthenticated } from '../auth';
import { getProjectsUpdate, getCategories, getProject, getProjectsDelete } from './AdminApi';
import { Link } from 'react-router-dom'


const UpdateProject = ({match}) => {
  const [categories, setCategories] = useState([]);
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
    updatedProject: '',
    redirectToProfile: false,
    formData: ''
});
const { user, token } = isAuthenticated();

const {
  name, category,body, 
  link1, link2, desc,loading, error, 
  formData, redirectToProfile, updatedProject
} = values


//load all categories
const initCategories = async () => {
   const data = await getCategories()
   if (data.error) {
    setValues({ ...values, error: data.error });
} else {
   setCategories(data)
}
}

const init = async projectId => {
    try {
        const data = await getProject(projectId)
        if(data.error){
            setValues({ ...values, error: data.error });
        }else{
            setValues({
                ...values,
                category: data.category._id,
                desc:data.desc,
                name:data.name,
                link1:data.link1,
                link2:data.link2,
                formData: new FormData()
            });
            initCategories()
        }
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
  init(match.params.projectId)
}, []);



const handleChange = name => event => {
  const value = name === 'photo' ? event.target.files[0] : event.target.value;
  formData.set(name, value);
  setValues({ ...values, [name]: value });
};


const clickSubmit = async event => {
  event.preventDefault();
  try {
     setValues({ ...values, error: '', loading: true });
     const data = await getProjectsUpdate(match.params.projectId,user._id, token, formData)
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
          updatedProject: data.name
      });
  }
  
    } catch (error) {
    console.log(error);
  }
 

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
          <label className="text-muted">link2</label>
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
  <div className="alert alert-info" style={{ display: updatedProject ? '' : 'none' }}>
      <h2>{`${updatedProject}`} is updated!</h2>
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

export default UpdateProject;
