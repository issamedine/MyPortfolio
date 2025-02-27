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
            <u>eDonec</u>: <strong>Lavenir application</strong>
            <br />
          </BioYear>
          <BioDescription>
            We used ARC CMS by The Washington Post, a centralized platform for
            managing multiple newspaper applications. It streamlines editorial
            workflows and allows for customization, optimizing operations and
            enhancing editorial impact.
          </BioDescription>
          <br />
          <span>. Take initial concepts and develop project plans.</span> <br />
          <span>
            . Template integration (Responsive Design & Pixel Perfect).
          </span>
          <br />
          <span>. Responsive Design with tablet and mobile views.</span> <br />
          <BioTechnologies>
            <strong>
              Technologies: HTML5, SCSS, React.js, Redux, Tailwind, Express.js,
              Node.js, MongoDB.
            </strong>
          </BioTechnologies>{' '}
          <br />
          <Link href="https://www.lavenir.net/" target="_blank">
            <strong style={{ color: '#000' }}>Link:</strong>{' '}
            https://www.lavenir.net/
          </Link>
        </BioMission>
        <BioMission>
          <BioYear>
            <u>Open bee</u>:<strong> Smart capture application</strong>
            <br />
          </BioYear>
          <BioDescription>
            It is a collaborative platform for dematerializing business
            processes, allowing you to intelligently classify and index all of
            your original paper or electronic documents. the Smart capture
            solution offers particularly reliable and advanced intelligent
            capture features.
          </BioDescription>
          <br />
          <span>
            . Code review, debugging problems and fixing problems.
          </span>{' '}
          <br />
          <span>
            . Generate and implement generic components and present them in
            Storybook.
          </span>
          <br />
          <span>
            . Extract new values ​​from documents, and calculate the TTC and HT
          </span>
          <br />
          <BioTechnologies>
            Technologies: HTML5, SASS, React.js, Redux, Material ui.
          </BioTechnologies>{' '}
          <br />
          <Link
            href="https://contenu.openbee.com/fiche-produit-smart-capture"
            target="_blank"
          >
            <strong style={{ color: '#000' }}>Link:</strong>{' '}
            https://contenu.openbee.com/fiche-produit-smart-capture
          </Link>
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
            An online education platform offering interactive courses, assessments, and personalized monitoring to allow learners to acquire new skills at their own pace..
          </BioDescription>
          <br />
          <span>
            . Implementation of learner performance monitoring.
          </span>{' '}
          <br />
          <span>. Implementation of real-time notifications and reminders. </span>
          <br />
          <BioTechnologies>
            Technologies: SASS, TypeScript, React JS, Next JS, Redux, Node JS, Express JS, MongoDB,
            Docker, Jira, GitLab, DataDog.
          </BioTechnologies>{' '}
          <br />
          <Link href="https://www.koors.io/" target="_blank">
            <strong style={{ color: '#000' }}>Link:</strong>{' '}
            https://www.koors.io/
          </Link>
        </BioMission>
        <BioSection>
          <BioYear>Since September 2023</BioYear>
          {'Full-stack JavaScript developer'}
        </BioSection>
        <BioMission>
          <BioYear>
            <u>ART & CODE</u>: <strong>ClickDar application</strong>
            <br />
          </BioYear>
          <BioDescription>
            A real estate application allowing agencies and individuals to publish ads, advanced filters to search for properties, and a dashboard to manage ads.
          </BioDescription>
          <br />
          <span>
            . Supervise the development team by distributing tasks, performing code reviews, and ensuring compliance with best practices.
          </span>
          <br />
          <span>. Negotiating with clients.</span>
          <br />
          <BioTechnologies>
            Technologies: SASS, TypeScript, React JS, Redux, Node JS, Nest JS, GraphQL, MongoDB, Jira, GitLab.
          </BioTechnologies>
        </BioMission>
        <BioMission>
          <BioYear>
            <u>GRAY MATTER</u>: <strong>Origin application</strong>
            <br />
          </BioYear>
          <BioDescription>
            This project consisted of designing and developing an innovative web platform for the
            insurance sector, aimed at the Canadian and North American markets. The platform
            allows users to purchase insurance, manage their policies, track their
            claims and interact with insurance advisors. The goal was to provide a
            smooth, secure and personalized user experience, while respecting
            local regulations.
          </BioDescription>
          <br />
          <span>
            . Optimization of application loading times by implementing code splitting and lazy loading with React and Webpack.
          </span>
          <br />
          <span>. Implemented client-side (localStorage, sessionStorage) and server-side (Redis) caching to reduce repetitive API calls.</span>
          <br />
          <BioTechnologies>
            Technologies: SASS, TypeScript, React JS, Redux, Node JS, Nest JS, GraphQL, MongoDB, StoryBook, Jira, GitLab.
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
              href="https://linkedin.com/in/issam-eddine-32a2a5315/"
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
