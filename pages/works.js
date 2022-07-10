import { useEffect } from 'react'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbIRead from '../public/images/works/iRead.png'
import thumbPostsapp from '../public/images/works/posts_app.gif'
import thumbMychat from '../public/images/works/myChat.gif'
import thumbSnake from '../public/images/works/snake.gif'
import thumbTictactoe from '../public/images/works/tictactoe.gif'
import thumbWebrtc from '../public/images/works/webrtc.gif'
import thumbChatbot from '../public/images/works/chatbot.gif'
import thumbIntegrationsite1 from '../public/images/works/website1.png'
import thumbIntegrationsite2 from '../public/images/works/website2.png'
import thumbScrollmagic from '../public/images/works/scrollmagic.png'

import ReactGA from 'react-ga'


const Works = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

  return(
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="pfegmc"
            title="iRead"
            thumbnail={thumbIRead}
          >
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="postsapp"
            title="Posts app"
            thumbnail={thumbPostsapp}
          >
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="mychat"
            title="my chat"
            thumbnail={thumbMychat}
          >
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="snake"
            title="snake game"
            thumbnail={thumbSnake}
          >
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="tictactoe"
            title="tic-tac-toe game"
            thumbnail={thumbTictactoe}
          >
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="videochat"
            title="video chat WebRTC"
            thumbnail={thumbWebrtc}
          >
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="chatbot"
            title="chatbot"
            thumbnail={thumbChatbot}
          >
          </WorkGridItem>
        </Section>


      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
        Static website
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="integrationsite1"
            title="Static website"
            thumbnail={thumbIntegrationsite1}
          >
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="integrationsite2"
            title="Static website"
            thumbnail={thumbIntegrationsite2}
          >
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="scrollmagic"
            title="Static website"
            thumbnail={thumbScrollmagic}
          >
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)
}
export default Works
