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
          <BioYear>2020</BioYear>
          Joined a training full-stack js at Go my code!
        </BioSection>

        <BioSection>
          <BioYear>Since August 2020</BioYear>
          {'Working as a consultant full-stack JavaScript developer'}
        </BioSection>

        <BioMission>
          <BioYear>
            <u>eDonec</u>: <strong>Booking application - 6 months</strong>
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
            <u>EMIKETIC</u>:
            <strong> Customer management application - 5 months</strong>
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
        <BioMission>
          <BioYear>
            <u>TANIT WEB</u>:
            <strong> Electronic diary application - 3 months</strong>
            <br />
          </BioYear>
          <BioDescription>
            A CMS developed by Washington post named ARC CMS is intended for
            newspaper applications and managing them at the same time.
          </BioDescription>
          <span>.Taking initial concepts and developing project plans.</span>{' '}
          <br />.
          <span>
            Integrating of models (Responsive Design & Pixel perfect).
          </span>
          <br />
          <BioTechnologies>
            Technologies: React JS, Redux, Tailwind.
          </BioTechnologies>
        </BioMission>
        <BioMission>
          <BioYear>
            <u>Open Bee</u>: <strong> Smart capture - 4 months</strong>
            <br />
          </BioYear>
          <BioDescription>
            A web application that helps the user to invoice gis PDFs that are
            based in a specified folder
          </BioDescription>
          <br />
          <span>
            . Reviewing code, debugging problems, and correcting issues.
          </span>
          <br />
          <span>. Generating and implementing generic components.</span> <br />
          <span>
            . Extracting new values from documents, and calculating the TTC and
            HT,...
          </span>
          <br />
          <BioTechnologies>
            Technologies: Material UI, React JS, Redux, Axios.
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
