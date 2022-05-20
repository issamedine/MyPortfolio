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
  <Layout title="Posts app">
    <Container>
      <Title>
        Posts Application <Badge>2020</Badge>
      </Title>
      <P>
        An authentication system,
      </P>
      <P>
        Each user can post a post and can interact with and comment on other posts posted
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/issamedine/Posts-MERN-GraphQL-Apollo">
            github.com/posts_app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>GraphQL, Express, React, Hooks & Apollo.</span>
        </ListItem>
      </List>

    
      <WorkImage src="/images/works/posts_app.gif" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
