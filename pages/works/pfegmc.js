import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="iRead">
    <Container>
      <Title>
        iRead <Badge>2020</Badge>
      </Title>
      <P>
        Reading, a human need that excites neurons and empathy, for that and as part of an end-of-study project at Go My Code I developed a web application allowing easy management of the online library, using MERN stack technologies
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/issamedine/PFE-GMC-iRead">
            github.com/PFE-GoMyCode-iRead <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Redux, NodeJS, ExpressJS, MongoDB</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works//iRead.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
