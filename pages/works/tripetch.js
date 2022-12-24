import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  ListIcon,
  // AspectRatio,
  Heading
} from "@chakra-ui/react"
import { BioSection } from "../../components/bio"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"
import Section from "../../components/section"
import CircleIcon from "../../components/icons"

const Work = () => (
  <Layout title="TriPetchIt">
    <Container>
      <Title>
        Tri Petch IT Solutions <Badge>2020-2022</Badge>
      </Title>
      <P>
        Tri Petch IT Solutions Co., Ltd. (TPIT) is the Digital & IT solution
        provider for Tri Petch Group companies. Over 30 years of experience, we
        have developed our innovative competence serving the automotive industry
        and related businesses such as financing and insurance. TPIT has a
        strong passion to drive the competitiveness of Tri Petch Group with our
        Digital & IT potentiality
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.tripetchgroup.com/en/tripetchitsolutions" isExternal>
            https://www.tripetchgroup.com/en/tripetchitsolutions
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>macOS/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, React, nextJs, nestJs, Express</span>
        </ListItem>
        <ListItem>
          <Meta>App</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.tis.myisuzu&hl=th&gl=US" isExternal>
              My-ISUZU <ExternalLinkIcon mx="2px" />
            </Link>        </ListItem>
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
              Constructed the logic and technology to create a new backend
              version for performance by increasing speed after implementation.
            </ListItem>
            <ListItem>
              <ListIcon as={CircleIcon} colorScheme="glassTeal" />
              Build internal tool using Jenkins to automate test and deploy
              after the change to use Gitlab-CI deploy.
            </ListItem>
            <ListItem>
              <ListIcon as={CircleIcon} colorScheme="glassTeal" />
              Worked with colleagues to re-architecture and detect defects
              problems for increasing efficiency.
            </ListItem>
            <ListItem>
              <ListIcon as={CircleIcon} colorScheme="glassTeal" />
              Diagnosed issues causing slow speeds in applications and
              documented the process to make the data query system more robust.
            </ListItem>
          </List>
        </BioSection>
      </Section>

      <WorkImage src="/images/works/tripetch-img-1.jpeg" alt="Inkdrop" />
      <WorkImage src="/images/works/tripetch-img-2.jpeg" alt="Inkdrop" />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
//   export { getServerSideProps } from '../../components/chakra'
