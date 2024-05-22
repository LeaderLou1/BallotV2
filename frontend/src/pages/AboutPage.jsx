
import React from 'react';
import NavBar from '../components/Navbar';
import { Flex, Text, Box } from '@radix-ui/themes';
import HeadingPhoto from '../Photo/headingPhoto.jpeg';

const AboutPage = () => {
  return (
    <Flex direction={{ initial: 'column', md: 'row' }} width="100vw">
      <NavBar />
      <Box minHeight="100vh" width="100%" backgroundColor="white" position="relative">
        <img src={HeadingPhoto} alt="Heading" style={{ width: "100%", display: 'block' }} />
        <Box 
          position="absolute" 
          top="50%" 
          left="12%" 
          transform="translate(0%, -50%)" 
          backgroundColor="rgba(0, 0, 0, 0.5)" 
          padding="1rem" 
          borderRadius="8px"
          style={{ 
            width: 'fit-content',
            maxWidth: '80%',
            textAlign: 'center'
          }}
        > 
          <Text 
            size="9" 
            style={{ 
              fontSize: "5vw", 
              fontWeight: "bold", 
              color: "white",
              whiteSpace: 'nowrap' 
            }}
          >
            Why Ballot?
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default AboutPage
