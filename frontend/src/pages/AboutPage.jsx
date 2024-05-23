
import React from 'react';
import NavBar from '../components/Navbar';
import { Flex, Text, Box, ScrollArea } from '@radix-ui/themes';
import HeadingPhoto from '../Photo/headingPhoto.jpeg';

const AboutPage = () => {
  return (
    <Flex direction={{ initial: 'column', md: 'row' }} width="100vw">
      <NavBar />
      <ScrollArea type="always" scrollbars="vertical" style={{ height:"100dvh" }}>
      <Box minHeight="100vh" width="100%" backgroundColor="white" position="relative">
        <div style={{ width: "100%", height:"30rem", display: 'block', backgroundColor:"blue"}}> </div>
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
            About Ballot
          </Text>
            
        
    
      <Text >About Us</Text>
      <Text >
        Welcome to Ballot, your go-to platform for connecting with political representatives. Our mission is to empower citizens by providing a direct channel to their representatives, ensuring that every voice is heard and every vote counts.
      </Text>
      <Text>
        In today's fast-paced world, staying informed about your representatives and their policies can be challenging. Ballot simplifies this process by offering a user-friendly interface where you can easily find and contact your representatives, learn about their stances on important issues, and stay updated on political events and news.
      </Text>
      <Text >
        Whether you're looking to ask questions, share your concerns, or support a cause, Ballot makes it easy to engage with your representatives and participate in the political process. Together, we can make a difference and ensure that our democracy remains vibrant and responsive to the needs of the people.
      </Text>
      <Text>
        Thank you for being a part of Ballot. Together, let's build a more connected and informed society.
        </Text>

        </Box>
      </Box>
      </ScrollArea>
    </Flex>
    
  );
};

export default AboutPage
