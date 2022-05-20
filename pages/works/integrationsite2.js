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

const Work = () => (
  <Layout title="Static website">
    <Container>
      <Title>
      Static website <Badge>2021</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://issamedine.github.io/mon-site-complet-Bootstrap---1/">
            github.com/website-demo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/issamedine/mon-site-complet-Bootstrap---1">
            github.com/integration-code <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, Bootstrap</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/website2.png" alt="image static website" />
    </Container>
  </Layout>
)

export default Work
