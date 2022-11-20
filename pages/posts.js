import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import HOC from '../public/images/medium/HOC.jpeg'
import snake from '../public/images/medium/snake.png'
import ComponentWillMount from '../public/images/medium/ComponentWillMount.jpeg'
import memorization from '../public/images/medium/memorization.jpeg'
import nextRouter from '../public/images/medium/next-router.png'
import gojs from '../public/images/medium/gojs.jpeg'

import ReactGA from 'react-ga'
import { useEffect } from 'react'


const Posts = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Popular Posts
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="Next JS (The React Framework) - part 1: Routing"
              thumbnail={nextRouter}
              href="https://medium.com/@issam.eddine.bouhoush/next-js-the-react-framework-part-1-routing-8c388abf3a5d"
            />
            <GridItem
              title="Memorization in React JS — Part 1/2"
              thumbnail={memorization}
              href="https://medium.com/@issam.eddine.bouhoush/memorization-in-react-js-72943127959c"
            />
            <GridItem
              title="Memorization in React JS — Part 2/2"
              thumbnail={memorization}
              href="https://medium.com/@issam.eddine.bouhoush/memorization-in-react-js-part-2-2-98e2d55e69fb"
            />
            <GridItem
              title="The equivalent of ComponentWillMount in React Hooks"
              thumbnail={ComponentWillMount}
              href="https://medium.com/@issam.eddine.bouhoush/the-equivalent-of-componentwillmount-in-react-hooks-76f4bb49161f"
            />
            <GridItem
              title="HOC - React JS"
              thumbnail={HOC}
              href="https://medium.com/edonec/reactjs-higher-order-components-the-fundamental-and-how-to-replace-them-with-hooks-3aeae857769d"
            />
            <GridItem
              title="Snake game - React JS"
              thumbnail={snake}
              href="https://medium.com/edonec/snake-game-with-react-js-hooks-600a742e70b7"
            />
            <GridItem
              title="How to build a simple application with GoJS (diagramming library)"
              thumbnail={gojs}
              href="https://medium.com/edonec/how-to-build-a-simple-application-with-gojs-diagramming-library-5692a66103c4"
            />
          </SimpleGrid>
        </Section>

        {/* <Section delay={0.3}>
      </Section>
      <Section delay={0.5}>
      </Section> ***/}
      </Container>
    </Layout>
  )
}

export default Posts
