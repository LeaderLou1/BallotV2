import {Box, Card, Text} from '@radix-ui/themes';
import { useState } from 'react';
import PostModal from './PostModal';

const PostCards = ({username, text}) =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return(
        <div>
             {isModalOpen && <PostModal closeModal={closeModal}/>}
            <Box maxWidth="350px" onClick={openModal}>
                <Card asChild style={{width: "250px", minheight: "100px"}}>
                <a href="#">
                  <Text as="div" size="4" weight="bold">
                         Quick start
                  </Text>
                  <Text as="div" color="gray" size="4">
                         {text}
                  </Text>
              </a>
            </Card>
        </Box>
        </div>
    )
}

export default PostCards