import {Box, Card, Text} from '@radix-ui/themes';
import { useState } from 'react';
import PostModal from './PostModal';

const PostCards = ({username, heading, text}) =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = (e) => {
        setIsModalOpen(true);
        console.log()
    }
    const closeModal = () => setIsModalOpen(false);

    return(
        <div>
             {isModalOpen && <PostModal closeModal={closeModal}/>}
            <Box maxWidth="350px" onClick={openModal}>
                <Card asChild style={{width: "250px", height: "150px"}}>
                <a href="#">
                  <Text as="div" size="4" weight="bold">
                         {heading}
                  </Text>
                  <Text as="div" color="gray" size="2">
                         {text}
                  </Text>
              </a>
            </Card>
        </Box>
        </div>
    )
}

export default PostCards