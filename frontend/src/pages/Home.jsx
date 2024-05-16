import { Flex, Box, Grid, Container } from '@radix-ui/themes';
import Feed from '../components/Feed';
import CreatePost from '../components/CreatePost';
import NavBar from '../components/Navbar';
import { useContext, useState } from 'react';
import HomePageContext from '../contexts/HomePageContext';

export default function HomePage() {
  const { currentHomePage, setCurrentHomePage } = useContext(HomePageContext);
  const [isFeedHovered, setIsFeedHovered] = useState(false);
  const [isPostHovered, setIsPostHovered] = useState(false);

  const handleFeedMouseEnter = () => {
    setIsFeedHovered(true);
  };

  const handleFeedMouseLeave = () => {
    setIsFeedHovered(false);
  };

  const handlePostMouseEnter = () => {
    setIsPostHovered(true);
  };

  const handlePostMouseLeave = () => {
    setIsPostHovered(false);
  };

  return (
    <Flex columns={{ initial: '1', md: '2' }} width="100vw">
      <NavBar />
     
      
     
      <Box minHeight='100vh' width='1140px' style={{ background: 'white' }}>
        <Grid width='100%' columns="2">
          <Flex justify="end" style={{ marginRight: "10rem" }}>
            <Box
              style={{ background: "white", cursor: "pointer"}}
              onMouseEnter={handleFeedMouseEnter}
              onMouseLeave={handleFeedMouseLeave}
              onClick={() => setCurrentHomePage(<Feed />)}
            >
              <center>
                <h1 style={{ textDecoration: isFeedHovered ? 'underline' : 'none', fontSize: isFeedHovered ? '2.2rem' : '2rem' }}>Feed</h1>
              </center>
            </Box>
          </Flex>
          <Flex justify="start" style={{ marginLeft: "10rem" }}>
            <Box
              style={{ background: "white", cursor: "pointer" }}
              onMouseEnter={handlePostMouseEnter}
              onMouseLeave={handlePostMouseLeave}
              onClick={() => setCurrentHomePage(<CreatePost />)}
            >
              <center>
                <h1 style={{ textDecoration: isPostHovered ? 'underline' : 'none', fontSize: isPostHovered ? '2.2em' : '2rem' }}>Post</h1>
              </center>
            </Box>
          </Flex>
        </Grid>
        <Box style={{ marginTop: '40px' }}>
          {currentHomePage}
        </Box>
      </Box>
    </Flex>
  );
}