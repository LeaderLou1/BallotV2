import {
    fetchHandler,
    getPostOptions,
    deleteOptions,
} from "../utils";

const baseUrl = "/api/users";

// Follow a user
export const followUser = async ({ follower_user_id, followed_user_id }) =>
    fetchHandler(
        `${baseUrl}/${follower_user_id}/followed_user_id`,
        getPostOptions({ followed_user_id })
    );

// Unfollow a user
export const unfollowUser = async ({ follower_user_id, followed_user_id }) =>
    fetchHandler(
        `${baseUrl}/${follower_user_id}/unfollowUser`,
        deleteOptions()
    );

// Get followers of a user
export const getFollowers = async (follower_user_id) =>
    fetchHandler(`${baseUrl}/${follower_user_id}/followers`);

// Get followed users
export const getFollowedUsers = async (followed_user_id) =>
    fetchHandler(`${baseUrl}/${followed_user_id}/followed`);