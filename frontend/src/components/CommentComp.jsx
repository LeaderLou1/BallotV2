import { Flex, Box, Popover, Text, Button, TextArea, Avatar, Checkbox} from '@radix-ui/themes';
import commentBubble from '../Photo/commentBubble.png'

const Comment = () => {
    return(
        <Popover.Root>
  <Popover.Trigger>
    <Button variant="ghost"  style={{marginLeft: "10px"}}>
      <img src={commentBubble} style={{width:"25px", height:"25px"}} />
    </Button>
  </Popover.Trigger>
  <Popover.Content width="360px">
    <Flex gap="3">
      <Avatar
        size="2"
        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        fallback="A"
        radius="full"
      />
      <Box flexGrow="1">
        <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
        <Flex gap="3" mt="3" justify="end">

          <Popover.Close>
            <Button size="2">Comment</Button>
          </Popover.Close>
        </Flex>
      </Box>
    </Flex>
  </Popover.Content>
</Popover.Root>
    )
}

export default Comment 