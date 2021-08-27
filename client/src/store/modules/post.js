import { getPosts, getPost, deletePost, createPost, editPost } from '../../services/post.services'


const state = {
    posts: [],
    post: [],
    notice_create: null,
    notice_delete: null,
    notice_edit: null,
}
const mutations = {
    SET_POSTS(state, data) {
        state.posts = data
    },
    SET_POST(state, data) {
        state.post = data
    },
    DELETE_POST(state, post) {
        if (state.post._id === post.data._id) {
            state.post = []
        }
    },
    CREATE_POST(state, data) {
        state.posts = data
    },
    EDIT_POST(state, post) {
        state.post = post.data
    },
    NOTICE_CREATE(state, message) {
        state.notice_create = message
    },
    NOTICE_EDIT(state, message) {
        state.notice_edit = message
    },
    NOTICE_DELETE(state, message) {
        state.notice_delete = message
    },
    NOTICE_HIDE(state) {
        state.notice_create = null
        state.notice_delete = null
        state.notice_edit = null
    }
}
const actions = {
    async FETCH_POSTS({ commit }) {
        try {
            const response = await getPosts()
            commit("SET_POSTS", response.data)
        } catch (error) {
            console.log(error)
        }
    },
    async FETCH_POST({ commit }, id) {
        try {
            const response = await getPost(id)
            commit("SET_POST", response.data)
        } catch (error) {
            console.log(error)
        }
    },
    async DELETE_POST({ commit }, id) {
        try {
            const response = await deletePost(id)
            commit("DELETE_POST", response.data)
            commit("NOTICE_DELETE", response.data.message)
        } catch (error) {
            console.log(error)
        }
    },
    async CREATE_POST({ commit }, data) {
        try {
            const response = await createPost(data)
            commit("CREATE_POST", response)
            commit("NOTICE_CREATE", response.data.message)
        } catch (error) {
            console.log(error)
        }
    },
    async EDIT_POST({ commit }, {id, data}) {
        try {
            const response = await editPost(id, data)
            commit("EDIT_POST", response.data)
            commit("NOTICE_EDIT", response.data.message)
        } catch (error) {
            console.log(error)
        }
    }
}
const getters = {
    GET_POSTS: ({ posts }) => posts,
    GET_POST: ({ post }) => post,
    EDIT_POST_GET: ({ post }) => post,
    ERROR: ({ postsError }) => postsError,
    NOTICE_CREATE: ({ notice_create }) => notice_create,
    NOTICE_DELETE: ({ notice_delete }) => notice_delete,
    NOTICE_EDIT: ({ notice_edit }) => notice_edit
}

export default {
    state,
    mutations,
    actions,
    getters
}