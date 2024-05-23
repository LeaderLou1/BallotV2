import {Box, Button, Card, Text, Flex} from '@radix-ui/themes';
import { useState } from 'react';
import PostModal from './PostModal';
import DeletePost from './DeletePost';

const PostCards = ({currentUser, post}) =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = (e) => {
        setIsModalOpen(true);
        console.log()
    }
    const closeModal = () => setIsModalOpen(false);
    console.log(post.text)
    return(
        <div>
             {isModalOpen && <PostModal closeModal={closeModal}/>}
            <Box maxWidth="350px" >

                <Card asChild style={{width: "250px", height: "200px"}}>
                <a href="#">
                    <Flex style={{height:"55px"}}>
                        <Text as="div" size="4" weight="bold">
                         {post.heading}
                      </Text>
                    </Flex>
                  
                  <Flex style={{height: "85px"}}>
                        <Text as="div" color="gray" size="2">
                            {post.content}
                        </Text>
                  </Flex>

                  <Flex justify="end" style={{height: "75px"}}>
                  {currentUser.id === post.user_id && <DeletePost />}
                  </Flex>
              </a>
            </Card>
            
        </Box>
        </div>
    )
}

export default PostCards