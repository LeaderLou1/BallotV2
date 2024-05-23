import { useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { logUserOut } from "../adapters/auth-adapter";
import { Flex, Box, Button, Separator, Text } from '@radix-ui/themes';
import homeIcon from '../Photo/homeIcon.png';
import profileIcon from '../Photo/placeholder.png';
import aboutIcon from '../Photo/aboutIcon.png';
import logo from '../Photo/Logo.png';
import CurrentUserContext from '../contexts/current-user-context';

const NavBar = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logUserOut();
        setCurrentUser(null);
        navigate('/');
    };

    return (
        <Box 
            minHeight="100vh" 
            width={{ initial: '100vw', md: '300px' }} 
            style={{ background: 'white', borderRight: ".2px solid black", padding: '1rem' }}
        >
            <Flex direction="column" align="center">
                <Flex direction="row" align="center" gap="0.5rem">
                    <img src={logo} alt="Verified" style={{ width: '30%', height: '30%' }} />
                    <Text size={{ initial: '3', md: '9' }} fontWeight="bold">Ballot</Text>
                </Flex>
             
         
            <Separator color="black" orientation="horizontal" size="3" />
            </Flex>
           

            <Flex direction="column" align="center" gap="1rem" style={{ marginTop: '2rem' }}>
                <NavLink to='/home' style={{textDecoration: "none"}}>
                    <Button
                        size={{ initial: '2', md: '4' }}
                        variant='ghost'
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}
                    >
                        <img
                            src={homeIcon}
                            alt="Home"
                            style={{ width: '20px', height: '20px' }}
                        />
                        Home
                    </Button>
                </NavLink>
                <Separator color="black" orientation="horizontal" size="2" />

                <NavLink to={currentUser ? `/users/${currentUser.id}` : '/'} style={{textDecoration: "none"}}>
                    <Button
                        size={{ initial: '2', md: '4' }}
                        variant='ghost'
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}
                    >
                        <img
                            src={profileIcon}
                            alt="Profile"
                            style={{ width: '20px', height: '20px' }}
                        />
                        Profile
                    </Button>
                </NavLink>
                <Separator color="black" orientation="horizontal" size="2" />

                <NavLink to='/about' style={{textDecoration: "none"}}>
                    <Button
                        size={{ initial: '2', md: '4' }}
                        variant='ghost'
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}
                    >
                        <img
                            src={aboutIcon}
                            alt="About"
                            style={{ width: '20px', height: '20px' }}
                        />
                        About
                    </Button>
                </NavLink>
                <Separator color="black" orientation="horizontal" size="2" />
            </Flex>

            <Flex justify='center' style={{ marginTop: 'auto' }}>
                <Button 
                    color="gray" 
                    variant="solid" 
                    onClick={handleLogout} 
                    highContrast 
                    size={{ initial: '2', md: '4' }}
                    style={{ width: '100%' }}
                >
                    Log Out
                </Button>
            </Flex>
        </Box>
    );
};

export default NavBar;
