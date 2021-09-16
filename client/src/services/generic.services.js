import axios from "axios"


const baseURL = process.env.NODE_ENV === "production"
     ? 'http://79.143.30.210:3001'
     : 'http://localhost:3001'


const axiosInstanse = axios.create({
     baseURL,
     proxyHeaders: false,
     credentials: false
});

const API_URL = axiosInstanse.defaults.baseURL


export const request = async ({ url, data, method }) => {
     const response = await axios[method](`${API_URL}/${url}`, data)
     return response
}
