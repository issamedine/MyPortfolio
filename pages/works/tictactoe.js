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
  <Layout title="Tic-Tac-Toe">
    <Container>
      <Title>
        Tic-Tac-Toe game application <Badge>2021</Badge>
      </Title>
      <P>
        A simple Tic-Tac-Toe game created with the React library.
      </P>

      <List ml={4} my={4}>
      
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://issamedine.github.io/tic-tac-toe-React/">
            github.com/tic-tac-toe-demo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/issamedine/tic-tac-toe-React">
            github.com/tic-tac-toe-game <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Hooks</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tictactoe.gif" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
