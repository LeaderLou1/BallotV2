import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils";

const baseUrl = '/api/users'

export const createPost = async ({ user_id, content }) => {
    const data = await fetchHandler(`${baseUrl}/${user_id}/posts`, getPostOptions({ content }))
    return data
};

export const getPostByUserId = async (id) => {
    const data = await fetchHandler(`${baseUrl}/${id}/posts`);
    return data;
};
