import React, { useState } from "react";
import { Flex, Box, Card, Text, Button, TextArea } from "@radix-ui/themes";
import { createPost } from "../adapters/post-adapter";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

const CreatePost = () => {
  const [errorText, setErrorText] = useState("");
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [user_id] = useState(currentUser.id); // Replace with actual user ID or get it from context/auth

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");

    try {
      await createPost({ user_id, heading, content });
      console.log({ user_id, heading, content });
    } catch (error) {
      setErrorText(error.message);
    }
  };

  return (
    <>
     

      <Flex justify="center">
        <Card style={{ width: "600px"}}>
      
        <Flex justify="center" style={{ marginBottom: "30px" }}>
           <Text size="7" weight="bold">
               Create A Post!
           </Text>
       </Flex>

          <form onSubmit={handleSubmit}>
            <Flex justify="center">
              <Box
                width="700px"
              >
                <Flex direction="column" gap="3">
                  <Text
                    as="div"
                    size="4"
                    weight="bold"
                    style={{ marginBottom: "15px" }}
                  >
                    Add a heading:
                  </Text>
                  <Box maxWidth="300px">
                    <TextArea
                      size="1"
                      placeholder="Add a heading…"
                      value={heading}
                      onChange={(e) => setHeading(e.target.value)}
                    />
                  </Box>
                  <Text size="4" weight="bold">
                    Add a caption:
                  </Text>
                  <Box maxWidth="300px">
                    <TextArea
                      size="3"
                      placeholder="Add a caption…"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </Box>
                </Flex>
              </Box>
            </Flex>

            <Flex justify="end" style={{ margin: "15px" }}>
              <Button variant="surface" type="submit">
                <Text size="4">Post</Text>
              </Button>
            </Flex>
          </form>
        </Card>
      </Flex>

      {errorText && (
        <Flex justify="center" style={{ marginTop: "20px" }}>
          <Text size="5" color="red">
            {errorText}
          </Text>
        </Flex>
      )}
    </>
  );
};

export default CreatePost;
