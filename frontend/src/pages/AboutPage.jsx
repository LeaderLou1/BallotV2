import React from 'react';
import NavBar from '../components/Navbar';
import { Flex, Text, Box, ScrollArea } from '@radix-ui/themes';
import HeadingPhoto from '../Photo/headingPhoto.jpeg';

const AboutPage = () => {
  return (
    <Flex direction={{ initial: 'column', md: 'row' }} width="100vw">
      <NavBar />
      <ScrollArea type="always" scrollbars="vertical" style={{ height: "100dvh" }}>
        <Box minHeight="100vh" width="100%" position="relative">
          <img src={HeadingPhoto} alt="Heading" style={{ width: "100%", height: "100vh", objectFit: "cover", position: "absolute", zIndex: -1 }} />
          <Box
            position="absolute"
            top="15%"
            left="15%"
            style={{
              width: '70%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Box
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                padding: '1.5rem',
                borderRadius: '8px',
                width: '100%',
                marginBottom: '1.5rem',
                color: 'white',
              }}
            >
              <Text
                size="9"
                style={{
                  fontSize: "4vw",
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: '1.5rem'
                }}
              >
                Why Ballot
              </Text>
            </Box>
            <Box
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                padding: '1.5rem',
                borderRadius: '8px',
                width: '100%',
                marginBottom: '1.5rem',
                color: 'white',
              }}
            >
              <Text
                size="8"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: '1.5rem'
                }}
              >
                Why It's Important
              </Text>
            </Box>
            <Box
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                padding: '1.5rem',
                borderRadius: '8px',
                width: '100%',
                marginBottom: '1.5rem',
                color: 'white',
              }}
            >
              <Text
                size="7"
                style={{
                  marginBottom: "1.5rem",
                  maxWidth: "100%"
                }}
              >
                Understanding who your local representatives are and what they stand for is crucial in a functioning democracy. Local representatives make decisions that directly impact your community, from education and public safety to infrastructure and healthcare.
              </Text>
            </Box>
            <Box
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                padding: '1.5rem',
                borderRadius: '8px',
                width: '100%',
                marginBottom: '1.5rem',
                color: 'white',
              }}
            >
              <Text
                size="7"
                style={{
                  marginBottom: "1.5rem",
                  maxWidth: "100%"
                }}
              >
                By staying informed and engaged, you can influence these decisions and ensure that your community's needs and concerns are addressed. Ballot provides the tools you need to stay connected with your representatives, track their voting records, and hold them accountable.
              </Text>
            </Box>
          </Box>
        </Box>
      </ScrollArea>
    </Flex>
  );
};

export default AboutPage;
