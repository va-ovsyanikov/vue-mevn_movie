import axios from "axios"


const baseURL = process.env.NODE_ENV === "production"
     ? 'http://k36366.fps.by'
     : 'http://localhost:3001'

const axiosInstanse = axios.create({
     baseURL,
     proxyHeaders: false,
     credentials: false,
     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
});

export const request = async ({ url, data, method }) => {
     const response = await axiosInstanse[method](`/${url}`, data)
     return response.data
}