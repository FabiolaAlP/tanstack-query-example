import axios from "axios";
const BASE_URL = "http://localhost:3000"
export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const getPost = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts/${id}`)
        // console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const createPost = async (newPost) => {
    try {
        const response = await axios.post(`${BASE_URL}/posts`, newPost)
        console.log("Post added sucessfully", response.data);
    } catch (error) {
        console.error(error)
    }
}