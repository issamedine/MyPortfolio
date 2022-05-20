import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Video chat">
    <Container>
      <Title>
        Video chat application <Badge>2021</Badge>
      </Title>
      <P>
        This is a video chat application.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/issamedine/Video-chat---MERN-WebRTC">
            github.com/video-chat <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Context API, NodeJS, ExpressJS, WebRTC</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/webrtc.gif" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
