import NextLink from 'next/link'
import { Button,Container, Box, Heading, Image, useColorModeValue} from "@chakra-ui/react"
import Head from "next/head"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection,BioYear } from '../components/bio'
// import { GridItem } from '../components/grid-item'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
// import {
//   IoLogoTwitter,IoLogoInstagram,IoLogoGithub,
// } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Thailand
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jirawat prosmee
          </Heading>
          <p> Software Engineer ( Artist / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/tar.JPG"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Head as="h3" variant="section-title">
          Work
        </Head>
      <Paragraph>
        Jirawat is a full-stack developer based in thailand.
        I always thought my dream was to be a senior software developer for a publishing company and create useful applications for people.
       I feel happy when people use my application. My specialties include quickly learning new skills 
       and programming languages, problem solving, responsive design principles, website optimization ,
        and Model View Controller(MVC) method of organizing code. So far I have JavaScript,
         TypeScript, HTML, CSS, Angular, React and Git. 
         I&apos;m still enthusiastically grabbing onto any other programming languages, frameworks, 
         or principles I can integrate into the coding web in my head.
      </Paragraph>
         <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">My portfolio</Button>
          </NextLink>
         </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Bangkok, Thailand
        </BioSection>
        <BioSection>
          <BioYear>2000</BioYear>
          Completed the Master &apos;s Program in Computer Science at Srinakhrinwirot University
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          SET Intership
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          TRIPETCH IT SOLUTIONS CO.,LTD.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          LSEG (London Stock Exchange Group)
          </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          {/* <Link href="https://illust.odoruinu.net/" target="_blank"> */}
            Drawing
          {/* </Link> */}
          , Playing Guitar,{' '}
          {/* <Link href="https://500px.com/p/craftzdog" target="_blank"> */}
            Photography {' '}
          {/* </Link> */}
          , Machine Learning
        </Paragraph>
      </Section>

      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>
        </Section> */}

    </Container>
    </Layout>
  )
}
export default Page
