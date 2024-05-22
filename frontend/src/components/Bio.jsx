import {Box, TextArea} from '@radix-ui/themes'

const Bio = () => {
  return<>
    <Box maxWidth="250px">
    <TextArea size="2" placeholder="Reply to comment…" />
    </Box>
  </>
}

export default Bio