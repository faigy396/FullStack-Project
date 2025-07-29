import axios from "axios";

const url = "https://localhost:7006/api/Game/";
export const getAllGames = () => {
    return axios.get(`${url}getall`);
}
export const getGameById = (id) => {
    return axios.get(`${url}getbyid/${id}`);
}
export const getByCategory = (categoryId) => {
    return axios.get(`${url}getbycategory/${categoryId}`);
}
export const addGame = (obj) => {
    return axios.put(`${url}add`, obj);
}
export const updateGame = (id, obj) => {
    return axios.post(`${url}upd/${id}`, obj);
}
export const deleteGame = (id) => {
    return axios.delete(`${url}del/${id}`);
}

// https://localhost:7006/api/Game/del15