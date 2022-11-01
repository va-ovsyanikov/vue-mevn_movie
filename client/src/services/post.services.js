
import { request } from "./generic.services";
export const getPosts = () => request({url: "", method:"get" })
export const getPost = (id) => request({url: `post/${id}`, method:"get" })
export const deletePost = (_id) => request({url:`post/${_id}`, method:"delete" })
export const createPost = (data) => request({url: `add-post`, method:"post", data })
export const editPost = (id, data) => request({url: `edit/${id}`, method:"patch", data })




