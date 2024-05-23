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
        `${baseUrl}/${follower_user_id}/unfollowUser?followed_user_id=${followed_user_id}`,
        deleteOptions()
    );

// Get followers of a user
export const getFollowers = async (followed_user_id) =>
    fetchHandler(`${baseUrl}/${followed_user_id}/followers`);

// Get followed users (people that the user is following)
export const getFollowedUsers = async (follower_user_id) =>
    fetchHandler(`${baseUrl}/${follower_user_id}/followed`);
