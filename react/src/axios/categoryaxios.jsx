import axios from "axios";

const url="https://localhost:7006/api/Category/";
export const getAllCategories=()=>{
    return axios.get(`${url}getall`);
}
export const getById=(id)=>{
    return axios.get(`${url}getbyid/${id}`)
}
export const addCategory=(obj)=>{
    return axios.put(`${url}add`, obj)
}
export const updateCategory=(id, obj)=>{
    return axios.post(`${url}upt/${id}`, obj)
}
export const deleteCategory=(id)=>{
    return axios.delete(`${url}del/${id}`)
}