import { Flex, Box, TextArea, Button, Text } from "@radix-ui/themes"
import { useContext } from "react";
import { useState } from 'react'
import UserBioContext from "../contexts/UserBioContext";

const Modal = ({ closeModal }) => {
   const { isBioSubmitted, setIsBioSubmitted, bio, setBio } = useContext(UserBioContext)
      const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const handleClick = () => {
        setIsBioSubmitted(true);
    };
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
        }}>
            <div style={{
                 background: "white",
                 padding: "20px",
                 borderRadius: "5px",
                 position: "relative",
                 width: "60%",
                 height: "25%",
                 maxWidth: "500px",
                 boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                 zIndex: 100,
            }}>
                <button style={{
                     position: "absolute",
                     top: "10px",
                     right: "10px",
                     background: "none",
                     border: "none",
                     fontSize: "1.5rem",
                     cursor: "pointer"
                }}
                onClick={closeModal}>
                    &times;
                </button>
                <>
              
                
                 <Flex justify="center">
                    <Text size="7" style={{ fontWeight: "bold"}}>Create A Bio!</Text>
                 </Flex>
                
                 <Flex justify="center">
                     <Box maxWidth="250px">
                    <TextArea
                        size="3"
                        placeholder="Add a bio..."
                        value={bio}
                        style={{margin: "20px"}}
                        onChange={handleBioChange}
                      />
                    </Box>
                 </Flex>
                 
                 <Flex justify="end" style={{ bottom:0}}>
                    <Button size="3" onClick={handleClick} >
                    Submit
                </Button>
                 </Flex>
                
                </>
            </div>
        </div>
    );
};

export default Modal;

