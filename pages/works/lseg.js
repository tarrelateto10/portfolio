import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    ListIcon,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Section from '../../components/section'
  import { Heading } from '@chakra-ui/react'
  import { BioSection } from '../../components/bio'
  import CircleIcon from '../../components/icons'
  
  const Work = () => (
    <Layout title="lseg">
      <Container>
        <Title>
          London Stock Exchange(LSEG) <Badge>2022-current</Badge>
        </Title>
        <P>
        Refinitiv Workspace is a new desktop platform designed to improve workflows, usability and performance. 
        It&apos;s tailored to your job role as well as being fully customizable, so you can find the information you need when you need it.
        </P>
        <P>
        The EAP is intended to test installation, security, functionality and content. As part of the EAP, 
        you&apos;ll be able to use Refinitiv Workspace and provide feedback, letting us know what we can do better or 
        tell us what would make doing your job easier and be more efficient.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://my.refinitiv.com/content/mytr/en/policies/refinitiv-workspace.html">
            https://www.refinitiv.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, VueJs, Angular,Express</span>
          </ListItem>
          {/* <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
              How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
              $5/mo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
        </List>

        <Section>
        <Heading as="h3" variant="section-title">
          Responsibility
        </Heading>
        <BioSection>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CircleIcon} colorScheme="glassTeal" />
              Developed internal software functionalities, ensuring that clients&apos; vision and requirements were.
            </ListItem>
            <ListItem>
              <ListIcon as={CircleIcon} colorScheme="glassTeal" />
              Worked alongside another developer to create an internal tool and find solutions to upgrade.
            </ListItem>
            <ListItem>
              <ListIcon as={CircleIcon} colorScheme="glassTeal" />
              Constructed the logic and technology to create a new backend version for performance by increasing speed after implementation.
            </ListItem>
            <ListItem>
              <ListIcon as={CircleIcon} colorScheme="glassTeal" />
              Diagnosed issues causing slow speeds in applications and
              documented the process to make the data query system more robust.
            </ListItem>
          </List>
        </BioSection>
      </Section>

        
  
        <WorkImage src="/images/works/lseg1.jpg" alt="Inkdrop" />
        <WorkImage src="/images/works/lseg2.jpeg" alt="Inkdrop" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/aQLldec7Joc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Container>
    </Layout>
  )
  
  export default Work
//   export { getServerSideProps } from '../../components/chakra'
  