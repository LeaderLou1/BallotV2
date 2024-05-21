// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/users";

export const createUser = async ({
  username,
  password,
  is_rep,
  first_name,
  last_name,
  picture_url,
  zipcode,
  state,
  location,
  bio,
}) =>
  fetchHandler(
    baseUrl,
    getPostOptions({
      username,
      password,
      is_rep,
      first_name,
      last_name,
      picture_url,
      zipcode,
      state,
      location,
      bio,
    })
  );

export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateUsername = async ({ id, username }) =>
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }));
