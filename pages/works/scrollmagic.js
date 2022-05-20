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
  <Layout title="Scroll magic">
    <Container>
      <Title>
        Static website scroll magic <Badge>2021</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://issamedine.github.io/Site_Paral_Scroll_Magic/">
            github.com/scroll-magic-demo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/issamedine/Site_Paral_Scroll_Magic">
            github.com/scroll-magic-code <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, Bootstrap</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/scrollmagic.png" alt="image static website" />
    </Container>
  </Layout>
)

export default Work
