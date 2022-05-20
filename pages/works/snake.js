import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Snake">
    <Container>
      <Title>
        Snake game application <Badge>2021</Badge>
      </Title>
      <P>
        A simple snake game created with the React library.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/issamedine/games/tree/main/src/Component/SnakeGame">
            github.com/snake-game <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Hooks</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/snake.gif" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
