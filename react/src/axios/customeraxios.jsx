import axios from "axios"

const url = "https://localhost:7006/api/Customer/"
export const isExist = (pass, name) => {
    return axios.get(`${url}isExist/${pass}/${name}`)
    // https://localhost:7006/api/Customer/isExist/1/l
}
export const getAllCustomers = () => {
    return axios.get(`${url}get`);
}
export const addCustomer = (obj) => {
    return axios.put(`${url}addcust`, obj);
}