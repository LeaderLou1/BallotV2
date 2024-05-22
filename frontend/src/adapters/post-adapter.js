import {
  fetchHandler,
  getPostOptions,
  getPatchOptions,
  deleteOptions,
} from "../utils";

const baseUrl = "/api/users";

export const createPost = async ({ user_id, heading, content }) =>
  fetchHandler(
    `${baseUrl}/${user_id}/posts`,
    getPostOptions({ heading, content })
  );

// GET /api/users/:user_id/posts
export const getPostByUserId = async (user_id) =>
  fetchHandler(`${baseUrl}/${user_id}/posts`);

// GET /api/posts
export const getAllPosts = async () => fetchHandler("/api/posts");

// PATCH /api/users/:user_id/posts/:post_id
export const updatePost = async ({ user_id, post_id, heading, content }) =>
  fetchHandler(
    `${baseUrl}/${user_id}/posts/${post_id}`,
    getPatchOptions({ heading, content })
  );

// DELETE /api/users/:user_id/posts/:post_id
export const deletePost = async ({ user_id, post_id }) =>
  fetchHandler(
    `${baseUrl}/${user_id}/posts/${post_id}`,
    deleteOptions()
  );