import { useState } from 'react';
import { Flex, Box, Button, Separator } from '@radix-ui/themes';
import homeIcon from '../Photo/homeIcon.png';
import profileIcon from '../Photo/placeholder.png';
import aboutIcon from '../Photo/aboutIcon.png';
import logo from '../Photo/Logo.png'

const NavBar = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    return (
        <Box minHeight="100vh" width='300px' style={{ background: 'white', border: ".2px solid black", borderRightWidth:".2px"}}> 
            <>
                <Flex columns={{ initial: '1', md: '2' }} gap="2" width="auto">
                  <img src={logo} alt="Verified" style={{ width: '6rem', height: '6rem', marginTop: '4rem', marginLeft: '1rem'}} />
                  <h1 style={{fontSize: '5rem', fontWeight: 'bold' }}>Ballot</h1>
                </Flex>

                <Flex justify='center'>
                    <Separator color="black" orientation="horizontal" size="3" />
                </Flex>
                <br />

                <Flex>
                    <Button
                        size="4"
                        color='grey'
                        variant='ghost'
                        style={{ fontSize: '30px', width: '300px', height: '60px', marginBottom: '.5rem' }}
                        onMouseEnter={() => setHoveredIcon('home')}
                        onMouseLeave={() => setHoveredIcon(null)}
                    >
                        <img
                            src={homeIcon}
                            alt="Home"
                            style={{ width: hoveredIcon === 'home' ? '25px' : '20px', height: hoveredIcon === 'home' ? '25px' : '20px' }}
                        />
                        Home
                    </Button>
                </Flex>

                <Flex justify='center'>
                    <Separator color="black" orientation="horizontal" size="3.5" />
                </Flex>

                <Flex>
                    <Button
                        size="3"
                        variant='ghost'
                        style={{ fontSize: '30px', width: '300px', height: '60px', marginBottom: '.5rem' }}
                        onMouseEnter={() => setHoveredIcon('profile')}
                        onMouseLeave={() => setHoveredIcon(null)}
                    >
                        <img
                            src={profileIcon}
                            alt="Profile"
                            style={{ width: hoveredIcon === 'profile' ? '25px' : '20px', height: hoveredIcon === 'profile' ? '25px' : '20px' }}
                        />
                        Profile
                    </Button>
                </Flex>

                <Flex justify='center'>
                    <Separator color="black" orientation="horizontal" size="3.5" />
                </Flex>

                <Flex>
                    <Button
                        size="4"
                        variant='ghost'
                        style={{ fontSize: '30px', width: '300px', height: '60px', marginBottom: '.5rem' }}
                        onMouseEnter={() => setHoveredIcon('about')}
                        onMouseLeave={() => setHoveredIcon(null)}
                    >
                        <img
                            src={aboutIcon}
                            alt="About"
                            style={{ width: hoveredIcon === 'about' ? '25px' : '20px', height: hoveredIcon === 'about' ? '25px' : '20px' }}
                        />
                        About
                    </Button>
                </Flex>

                <div style={{ marginTop: "335px" }}>
                    <Flex>
                        <Button color="gray" variant="solid" highContrast style={{ fontSize: '30px', width: '300px', height: '60px' }}>
                            Log Out
                        </Button>
                    </Flex>
                </div>
            </>
        </Box>
    );
}

export default NavBar;