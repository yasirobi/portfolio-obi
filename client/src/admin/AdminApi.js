import {API} from '../configUrl'
import axios from 'axios'


export const getCategoryDelete = async (categoryId, userId, token) => {
    
    try {
         const res = await fetch(`${API}/category/${categoryId}/${userId}`, {
            method: "DELETE", 
            headers: {
                Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
              
            }, 
         })
         return res.json()
        
    } catch (error) {
        console.log(error);
    }    
}


export const getCategoryUpdate = async (categoryId, userId, token, category) => {
    
    try {
         const res = await fetch(`${API}/category/${categoryId}/${userId}`, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
              
            },  
            body: category
         })
         return res.json()
        
    } catch (error) {
        console.log(error);
    }    
}

export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const createProject = async (userId,token,product) => {
    
    try {
         const res = await fetch(`${API}/project/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
              
            },
            body: product,
         })
         return res.json()
        
    } catch (err) {
        console.log(err);
    }    
}






export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const getProjectsList = async () => {
    
    try {
         const res = await fetch(`${API}/projects?limit=undefined`, {
            method: "GET",  
         })
         return res.json()
        
    } catch (error) {
        console.log(error);
    }    
}



export const getProjectsDelete = async (projectId, userId, token) => {
    
    try {
         const res = await fetch(`${API}/project/remove/${projectId}/${userId}`, {
            method: "DELETE", 
            headers: {
                Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
              
            }, 
         })
         return res.json()
        
    } catch (error) {
        console.log(error);
    }    
}


export const getProjectsUpdate = async (projectId, userId, token, project) => {
    
    try {
         const res = await fetch(`${API}/project/${projectId}/${userId}`, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
              
            },  
            body: project
         })
         return res.json()
        
    } catch (error) {
        console.log(error);
    }    
}

export const getProject = async (projectId) => {
    
    try {
         const res = await fetch(`${API}/project/${projectId}`, {
            method: "GET",  
         })
         return res.json()
        
    } catch (error) {
        console.log(error);
    }    
}

export const getCategory = async (categoryId) => {
    
    try {
         const res = await fetch(`${API}/category/${categoryId}`, {
            method: "GET",  
         })
         return res.json()
        
    } catch (error) {
        console.log(error);
    }    
}