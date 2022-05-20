import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="myChat">
    <Container>
      <Title>
        mychat <Badge>2020</Badge>
      </Title>
      <P>
        I developed a web application that allows real-time communication between clients and servers. It is built on the Websockets (client) and Node.js (server) APIs.
      </P>
      <P>
        It is a simple web chat application that allows users to talk to each other in real time. Our application will consist of two separate components, a server and a client, each with different responsibilities:
      </P><br />
      <P>
        Chat server responsibilities:
      </P>
      <P>. Serve the HTML, CSS and JavaScript client files to the users</P>
      <P>. Start the Socket.io connection</P>
      <P>. Receive events from clients (like a new chat message) and broadcast them to other clients
      </P>
      <br />
      <P>
        Chat Client Responsibilities: <br />
      </P>
      <P>. Load socket.io client library</P>
      <P>. Establish connection with the Socket.io running in our server</P>
      <P>. Ask the user to enter his name so we can identify him in the chat</P>
      <P>. Emit and receive events to/from Socket.io running in our server</P>
      <P>. Add our own messages to the chat via JavaScript</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/issamedine/myChat">
            github.com/myChat <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vanilla JavaScript, NodeJS, ExpressJS, socket.io</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/myChat.gif" alt="Inkdrop" />
    </Container>
  </Layout >
)

export default Work
