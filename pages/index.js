import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioMission, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import { BsLinkedin } from 'react-icons/bs'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        max-width="100ch"
      >
        {"Hello, I'm a full-stack developer based in Tunisia!"}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Issam Eddine BOUHOUCH
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/issam.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Presentation
        </Heading>
        <Paragraph>{'. Hi, I’m @issam_eddine_bouhouch.'}</Paragraph>
        <Paragraph>
          . My background and my passion for IT, have allowed me to acquire
          technical and practical knowledge essential to the exercise of this
          profession.
        </Paragraph>
        <Paragraph>
          . My expertise is in web development, in particular MERN Stack.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2013</BioYear>
          {"Bac+2 - Higher Institute of Computer Science, Tunis."}
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Freelance front end developer
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at Youlead! as a web integrator
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Joined a training full-stack js at Go my code!
        </BioSection>

        <BioSection>
          <BioYear>Since August 2020</BioYear>
          {'Working as a consultant full-stack JavaScript developer'}
        </BioSection>

        <BioMission>
          <BioYear>
            <u>eDonec</u>
            <br />
          </BioYear>
          . Developing a part of a booking application: <br />
          . Authentification <br />
          . Dashboard 70% <br />
          {
            ". Administration of rooms, basket and hotel reservations (Addition/Deletion/Modification)"
          }
          <br />
          . Tablet and mobile responsive <br />
        </BioMission>
        <BioMission>
          <BioYear>
            <u>EMIKETIC</u>
            <br />
          </BioYear>
          . Developing a part of a customer management application: <br />
          . Authentification <br />
          . Project administration views
          <br />
          {
            ". Profile of each client where their assigned projects are and other details"
          }
          <br />
        </BioMission>
        <BioMission>
          <BioYear>
            <u>TANIT WEB</u>
            <br />
          </BioYear>
          . I worked on a CMS developed by washington post which named ARC CMS
          intended for newspaper applications, this cms developed with React JS
          and manages several applications at the same time <br />.
          Technologies: SASS, React JS, Redux, Node JS, Express JS, MongoDB.
        </BioMission>
        <BioMission>
          <BioYear>
            <u>Open Bee</u>
            <br />
          </BioYear>
          . I worked on an application to manage pdf invoices: <br />
          . extraction of values from the document <br />
          . calculate the ttc and ht <br />
          . validate the line items <br />
        </BioMission>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Sport, Music, Video games, Development</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/issamedine" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @issamedine
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/issam-eddine-bouhouch-1bb03723b/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={BsLinkedin} />}
              >
                Linkedin
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
