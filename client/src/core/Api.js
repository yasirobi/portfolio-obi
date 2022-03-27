import { API } from "../configUrl";
import queryString from "query-string";

export const getProjects = async (sortBy) => {
    
    try {
         const res = await fetch(`${API}/projects?sortBy=${sortBy}&order=desc&limit=4`, {
            method: "GET",  
         })
         return res.json()
        
    } catch (error) {
        console.log(error);
    }    
}

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
        .then(response => {
           
            return response.json();
        })
        .catch(err => console.log(err));
};


export const getFilteredProjects = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };
    return fetch(`${API}/projects/by/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};



export const list = params => {
    const query = queryString.stringify(params);
    console.log("query", query);
    return fetch(`${API}/projects/search?${query}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const getProject = async projectId => {
    
    try {
         const res = await fetch(`${API}/project/${projectId}`, {
            method: "GET",  
         })
         return res.json()
        
    } catch (error) {
        console.log(error);
    }    
}


export const getRelatedProject = async projectId => {
    
    try {
         const res = await fetch(`${API}/projects/related/${projectId}`, {
            method: "GET",  
         })
         return res.json()
        
    } catch (error) {
        console.log(error);
    }    
}










