import axios from "axios";

const url = "https://localhost:7006/api/Shopping/";

export const addShopping = (obj) => {
    return axios.put(`${url}add`, obj);
}
export const getAllShopping = () => {
    return axios.get(`${url}get`);
}