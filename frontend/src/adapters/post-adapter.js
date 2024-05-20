import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils";

const baseUrl = '/api/users'

export const createPost = async ({ user_id, content }) => (
    fetchHandler(`${baseUrl}/${user_id}/posts`, getPostOptions({ content }))
);

export const getPostByUserId = async (id) => fetchHandler(`${baseUrl}/${user_id}/posts`);
