import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { Text, Flex, Box, Button, TextArea } from "@radix-ui/themes";
import profileIcon from '../Photo/placeholder.png';
import verified from '../Photo/verified.png'
import { getPostByUserId } from "../adapters/post-adapter";
import Modal from './Modal'; 
import UserBioContext from "../contexts/UserBioContext";

const UserInfo = () => {
    const { currentUser } = useContext(CurrentUserContext);
    const { isBioSubmitted, bio } = useContext(UserBioContext)
    const [post, setPost] = useState([]);
    const [errorText, setErrorText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

   
    useEffect(() => {
        const fetchPosts = async () => {
            const [userPost, error] = await getPostByUserId(currentUser?.id);
            if (error) return setErrorText(error.message);
            setPost(userPost);
        };
        fetchPosts();
    }, [currentUser]);

    useEffect(() => {
        console.log('posts:', post.length);
    }, [post]);

  


    console.log(currentUser)
    return (
        <>
            <Flex>
                <img
                    src={profileIcon}
                    alt="Profile"
                    style={{ width: '150px', height: '150px', marginLeft: '8px' }}
                />
                <Box style={{ padding: '10px', margin: '10px' }}>
                    <Flex style={{ margin: '2px' }}>
                        <Text size='8' style={{ marginLeft: '8px', fontWeight: 'bold' }}>
                            {currentUser?.username}
                        </Text>
                        {currentUser?.is_rep ?
                           <><img 
                           src={verified} 
                           alt="" 
                           style={{ marginLeft: "2px", marginTop: "4px", width: '20px', height: '20px' }}
                           /></>
                           :
                           <>
                           </>   
                       }
                    </Flex>

                    <Flex style={{ margin: '2px' }}>
                        <Text size="6" style={{ marginLeft: '8px' }}>
                            {post.length} Posts
                        </Text>
                    </Flex>

                    <Flex style={{ margin: '2px' }}>
                        <Text size='8' style={{ marginLeft: '8px', marginRight: '8px' }}>
                            {currentUser?.first_name}
                        </Text>
                        <Text size='8'>{currentUser?.last_name}</Text>
                    </Flex>

                    <Flex style={{ margin: '6px' }}>
              
                        {!isBioSubmitted ? (
                             <div>
                             <Button  variant="outline" onClick={openModal}>Create bio</Button>
                             {isModalOpen && <Modal closeModal={closeModal} />}
                            </div>
                        ) : (
                            <Text size='4'style={{margin: '6px'}}>{bio}</Text>
                        )}
                    </Flex>
                </Box>
            </Flex>
        </>
    );
};

export default UserInfo;
