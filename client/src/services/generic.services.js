import axios from "axios"


// const baseURL = process.env.NODE_ENV === "production"
//      ? 'http://k36366.fps.by/'
//      : 'http://localhost:3001'

const baseURL = 'http://k36366.fps.by'
const axiosInstanse = axios.create({
     baseURL,
     proxyHeaders: false,
     credentials: false
});

const API_URL = axiosInstanse.defaults.baseURL


export const request = async ({ url, data, method }) => {
     const response = await axios[method](`${API_URL}/${url}`, data)
     return response.data
}