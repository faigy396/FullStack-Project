import axios from "axios";

const url = "https://localhost:7006/api/ShoppingDetails/";

export const addShoppingDetail = (buyId, objList) => {
    return axios.put(`${url}add/${buyId}`, objList);
}
export const getAllShoppingDetails=()=>{
    return axios.get(`${url}get`)
}