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
        throw error
    }
}

export const createPost = async (newPost) => {
    try {
        const response = await axios.post(`${BASE_URL}/posts`, newPost)
        console.log("Post added successfully", response.data);
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const editPost = async (id, updatedPost) => {
    try {
        const response = await axios.patch(`${BASE_URL}/posts/${id}`, updatedPost)
        console.log("Successfully edited post!", response.data);
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const deletePost = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/posts/${id}`);
        console.log("Post deleted", response.data);
    } catch (error) {
        throw error;
    }
}

//paginated query
export const fetchComments = async (_page = 1, _limit = 5) => {
    try {
        const response = await axios.get(`${BASE_URL}/comments/`, { params: { _page, _limit } });
        const totalComments = response.headers['x-total-count'];
        const totalPages = Math.ceil(totalComments / _limit);
        return { data: response.data, total: totalPages };
    } catch (error) {
        throw error;
    }
}

//infinite queries (infinite scroll)
export const fetchProfiles = async ({ pageParam = 1 }) => {
    const limit = 5
    try {
        const response = await axios.get(`${BASE_URL}/profiles`, { params: { _page: pageParam, _limit: limit } });
        // console.log(response.data)
        // console.log("page:", pageParam)
        const totalProfiles = response.headers['x-total-count'];
        const totalPages = Math.ceil(totalProfiles / limit);
        return { data: response.data, nextPage: pageParam + 1, total: totalPages }
    } catch (error) {
        throw error;
    }
};