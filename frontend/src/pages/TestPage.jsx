import { Flex, Box, Separator, Grid, Text } from '@radix-ui/themes';
import UserInfo from '../components/UserInfo';
import CurrentUserContext from "../contexts/current-user-context";
import { useEffect, useContext, useState } from 'react';
import { getPostByUserId } from "../adapters/post-adapter";
import PostCards from '../components/PostCards';

const TestPage = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [posts, setPost] = useState([]);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
        const [userPost, error] = await getPostByUserId(currentUser?.id);
        if (error) return setErrorText(error.message);
        setPost(userPost);
    };
    fetchPosts();
  }, [currentUser]);

  useEffect(() => {
    console.log('posts:', posts);
  }, [posts]);

  return (
    <>
      <Flex justify="start" style={{ marginLeft: "50px" }}>
        <UserInfo />
      </Flex>

      <Box style={{ paddingLeft: "90px", paddingRight: "90px" }}>
        <Separator orientation="horizontal" size="4" />
      </Box>
       
      <Flex justify="center" style={{ margin: '20px' }}>
        <Text size="9">Posts</Text>
      </Flex>

      <Flex justify="center">
        <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
          {posts.map((post) => (
            <PostCards key={post.id} username={currentUser?.username} text={post?.content} />
          ))}
        </Grid>
      </Flex>
    </>
  );
}

export default TestPage;
