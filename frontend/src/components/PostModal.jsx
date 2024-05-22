import { Flex, Box, TextArea, Button, Text, Card} from "@radix-ui/themes"
import { useContext } from "react";
import { useState } from 'react'
import UserBioContext from "../contexts/UserBioContext";

const PostModal = ({ closeModal, text, username}) => {
 
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99,
        }}
         onClick={closeModal}
        >
                <button style={{
                     position: "absolute",
                     top: "10px",
                     right: "10px",
                     background: "none",
                     border: "none",
                     fontSize: "1.5rem",
                     cursor: "pointer"
                }}
               ></button>
              
                <>
                 <Flex justify="center">
                    <Card>
                        <Text>Username goes here</Text>
                       <Card asChild style={{width: "250px", minheight: "100px"}}>
                            <a href="#">
                                 <Text as="div" size="4" weight="bold">
                                      Heading
                                  </Text>
                                 <Text as="div" color="gray" size="4">
                                      text content goes here
                                  </Text>
                             </a>
                      </Card>
                    </Card>
                 </Flex>
                
                </>
            </div>
        // </div>
    );
};

export default PostModal;

