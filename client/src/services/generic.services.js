import axios from "axios"

const API_URL = "http://localhost:3001"
export const request = async ({ url, data, method }) => {
       const response = await axios[method](`${API_URL}/${url}`, data)
       return response
}
  