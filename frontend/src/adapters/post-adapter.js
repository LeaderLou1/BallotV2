import {
  fetchHandler,
  getPostOptions,
  getPatchOptions,
  deleteOptions,
} from "../utils";

const baseUrl = "/api/users";

export const createPost = async ({ user_id, content }) =>
  fetchHandler(`${baseUrl}/${user_id}/posts`, getPostOptions({ content }));

// GET /api/users/:user_id/posts
export const getPostByUserId = async (user_id) =>
  fetchHandler(`${baseUrl}/${user_id}/posts`);

// GET /api/posts
export const getAllPosts = async () => fetchHandler("/api/posts");
