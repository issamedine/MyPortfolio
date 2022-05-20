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
  <Layout title="Chatbot">
    <Container>
      <Title>
        Chatbot <Badge>2021</Badge>
      </Title>
      <P>
        A chatbot is an application that can mimic a real conversation with a user. Chatbots allow communication via text on a website.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://issamedine.github.io/my-chatbot/?fbclid=IwAR0kZvZx4deqFmz8uvtE5XjQ01k5sUCWSYzIV-TQeKbdkpBxEQtbqTKEROU">
            github.com/chatbot-demo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/issamedine/my-chatbot">
            github.com/chatbot <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, react-chatbot-kit</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/chatbot.gif" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
