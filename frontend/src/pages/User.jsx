import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import {getPostByUserId} from "../adapters/post-adapter";
import NavBar from "../components/Navbar";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import { Flex, Box, Separator, Grid, Text } from '@radix-ui/themes';
import UserInfo from '../components/UserInfo';
import PostCards from '../components/PostCards';

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [posts, setPost] = useState()
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);


useEffect(() => {
  const fetchPosts = async () => {
      const [userPost, error] = await getPostByUserId(currentUser?.id);
      // if (error) return setErrorText(error.message);
      setPost(userPost);
  };
  fetchPosts();
}, [currentUser]);

useEffect(() => {
  console.log('posts:', posts);
}, [posts]);

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return <>

<Flex columns={{ initial: '1', md: '2' }} width="100vw">
      <NavBar />
    
        <Box style={{ marginTop: '40px' }}>
        <Box minHeight='100vh' width='1140px' style={{ background: 'white' }}>
        <Flex justify="start" style={{ marginLeft: "150px" }}>
        <UserInfo />
      </Flex>

      <Box style={{ paddingLeft: "90px", paddingRight: "90px" }}>
        <Separator orientation="horizontal" size="4" />
      </Box>
       
      <Flex justify="center" style={{ margin: '20px' }}>
        <Text size="8">Posts</Text>
      </Flex>

      <Flex justify="center">
        <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
          {posts?.map((post) => (
            <PostCards key={post?.id} username={currentUser?.username} text={post?.content} />
          ))}
        </Grid>
      </Flex>
      
        </Box>
      </Box>
    </Flex>
   
  </>;
}
