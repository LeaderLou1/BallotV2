import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils";

const baseUrl = '/api/users/id:/posts'

export const createPost = async ({ user_id, content }) => (
    fetchHandler(baseUrl, getPostOptions({ user_id, content }))
);

export const getAllPosts = async () => {
    const [posts] = await fetchHandler(baseUrl);
    return posts || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updatePostContent = async ({ id, content }) => (
    fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, content }))

);
