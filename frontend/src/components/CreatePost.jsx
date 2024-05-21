import { Flex, Box, Card, Text, Button, TextArea } from "@radix-ui/themes";
import { createPost } from "../adapters/post-adapter";

const CreatePost = () => {
  return (
    <>
      <Flex justify="center" style={{ marginBottom: "30px" }}>
        <Text size="9" weight="bold">
          Create A Post!
        </Text>
      </Flex>

      <Flex justify="center">
        <Card style={{ width: "450px" }}>
          <Flex justify="center">
            <Box width="450px" style={{ margin: "20px", paddingLeft: "50px" }}>
              <Flex direction="column" gap="3">
                {/* <Text size='6' weight="bold">Add a heading:</Text>
              <Box maxWidth="250px">
                <TextArea size="2" placeholder="Grab the citizens attention!" />
              </Box> */}
                <Text size="6" weight="bold">
                  Add a caption:
                </Text>
                <Box maxWidth="300px">
                  <TextArea size="3" placeholder="Add a caption…" />
                </Box>
              </Flex>
            </Box>
          </Flex>

          <Flex justify="end" style={{ marginRight: "15px" }}>
            <Button variant="surface">
              <Text size="4"> Post</Text>
            </Button>
          </Flex>
        </Card>
      </Flex>
    </>
  );
};

export default CreatePost;
