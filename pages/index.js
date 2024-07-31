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
import {
  BioSection,
  BioMission,
  BioYear,
  BioTechnologies,
  BioDescription
} from '../components/bio'
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
        <Paragraph>
          <span>Hi, I’m</span>{' '}
          <Link
            href="https://www.linkedin.com/in/issam-eddine-1bb03723b/"
            target="_blank"
          >
            @issam_eddine_bouhouch.
          </Link>
        </Paragraph>
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
          {'Bac+2 - Higher Institute of Computer Science, Tunis.'}
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Freelance front end developer
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at YZEO! as a web integrator
        </BioSection>
        <BioSection>
          <BioYear>January 2020</BioYear>
          Joined a training full-stack js at Go my code!
        </BioSection>

        <BioSection>
          <BioYear>Since August 2020</BioYear>
          {'Working as a consultant full-stack JavaScript developer'}
        </BioSection>
        <BioMission>
          <BioYear>
            <u>eDonec</u>: <strong>Booking application</strong>
            <br />
          </BioYear>
          <BioDescription>
            A booking application that helps the user to find a convenient hotel
            and book a room after he logged in
          </BioDescription>
          <br />
          <span>. Working on the authentication process.</span> <br />
          <span>. Developing dashboard features using Chart JS. </span>
          <br />
          <span>
            . Generating and implementing components for the administration of
            rooms, baskets and hotel reservations
            (Addition/Deletion/Modification)
          </span>
          <br />
          <span>. Responsive Design with tablet and mobile views.</span> <br />
          <BioTechnologies>
            Technologies: SASS, TypeScript, React JS, Redux, Node JS, Express
            JS, MongoDB.
          </BioTechnologies>
        </BioMission>
        <BioMission>
          <BioYear>
            <u>EMIKETIC</u>:<strong> Customer management application</strong>
            <br />
          </BioYear>
          <BioDescription>
            Developing a part of customer management application:
          </BioDescription>
          <br />
          <span>. Working on the authentication process.</span> <br />
          <span>
            . Integrating models for the project administration components.
          </span>
          <br />
          <span>. Adjusting and Implementing design for the project.</span>{' '}
          <br />
          <span>
            . Working with Rest Api and branching between the backend and the
            frontend.
          </span>
          <br />
          <BioTechnologies>
            Technologies: Bootstrap, React JS, Redux, Axios, Node JS, Express
            JS, MongoDB.
          </BioTechnologies>
        </BioMission>
        <BioSection>
          <BioYear>Since September 2022</BioYear>
          {'Working as a full-stack JavaScript developer'}
        </BioSection>
        <BioMission>
          <BioYear>
            <u>Slash Up Studio</u>: <strong>KOORS application</strong>
            <br />
          </BioYear>
          <BioDescription>
            An application that brings together the best features to allow
            talented trainers to broadcast online courses to as many people as
            possible
          </BioDescription>
          <br />
          <span>
            . Management and adaptation of technical solutions for the functionalities of a web application.
          </span>{' '}
          <br />
          <span>. Website maintenance management. </span>
          <br />
          <span>. Responsive Design with tablet and mobile views.</span> <br />
          <BioTechnologies>
            Technologies: SASS, TypeScript, React JS, Next JS, Redux, Node JS,
            Express JS, MongoDB.
          </BioTechnologies>
        </BioMission>
        <BioSection>
          <BioYear>Since September 2023</BioYear>
          {'CEO & Founder'}
        </BioSection>
        <BioMission>
          <BioYear>
            <u>Art Of Coding</u>:
            <br />
          </BioYear>
          <strong>ClickDar application</strong>
          <BioDescription>
            Development of a real estate application featuring 360° property
            visualization, Google Maps integration for location, and a modern
            dashboard for agencies to manage listings and access detailed
            statistics. Includes a chat with the owner and an elegant design
            with advanced animations for an optimal user experience.
          </BioDescription>
          <br />
          <span>
            {`. Led a freelance team consisting of a commercial representative, two developers, and a designer.`}
          </span>{' '}
          <br />
          <span>{`. Negotiated with potential partners or investors.`}</span>
          <br />
          <span>{`. Full-stack JavaScript development, covering both frontend and backend applications.`}</span> <br />
          <BioTechnologies>
            Technologies: SASS, TypeScript, Next JS, Redux toolikit, Node JS,
            Nest JS, GraphQL, MongoDB.
          </BioTechnologies>
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
