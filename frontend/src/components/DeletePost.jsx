import React from "react";
import { Button, Text } from "@radix-ui/themes";
import { deletePost } from "../adapters/post-adapter";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

const DeletePost = ({ post, onDelete }) => {
    const { currentUser } = useContext(CurrentUserContext);
    const user_id = currentUser?.id;

    const handleDelete = async () => {
        try {
            await deletePost({ user_id, post_id: post.id });
            console.log(`Post ${post.id} deleted`);
            onDelete(post.id);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Button variant="surface" onClick={handleDelete}>
            <Text size="4">Delete</Text>
        </Button>
    );
};

export default DeletePost;
