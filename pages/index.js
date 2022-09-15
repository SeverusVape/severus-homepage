import NextLink from "next/link";
import {
    Container,
    Box,
    Heading,
    Link,
    Image,
    List,
    ListItem,
    SimpleGrid,
    useColorModeValue,
    Button,
    Icon,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import { BioSection, BioYear } from "../components/bio";
import { GridItem } from "../components/grid-items";
import { IoLogoLinkedin, IoLogoDiscord, IoLogoGithub } from "react-icons/io5";
import thumbLinkedIn from "../public/images/links/linkedin.png";
const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                    fontWeight={500}
                    p={3}
                    mb={6}
                    textAlign="center"
                    textTransform="uppercase"
                    css={{ backdropFilter: "blur(20px)" }}
                >
                    Hello, I&apos;m a full ^ stack developer based in USA!
                </Box>

                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Severus Vape
                        </Heading>
                        <p>Digital enthusiast ( Developer / Designer )</p>
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
                            src="/images/severus.jpg"
                            alt="Profile Img"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.{" "}
                        <NextLink href="/works/example">
                            <Link>EXAMPLE#1</Link>
                        </NextLink>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
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
                        <BioYear>1986</BioYear>
                        Born in Kaliningrad (Russia)
                    </BioSection>
                    <BioSection>
                        <BioYear>2008</BioYear>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Senectus et netus et malesuada fames ac.
                    </BioSection>
                    <BioSection>
                        <BioYear>2014</BioYear>
                        Ab quia ratione ad possimus eius eum atque totam. A
                        eaque excepturi id voluptatum quidem hic enim esse 33
                        galisum culpa ea quidem perspiciatis et animi explicabo
                        non repellat laborum.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        In totam voluptatibus hic nostrum corporis et doloremque
                        neque. Qui sint dolores et libero molestias ex rerum
                        omnis in sunt neque non modi quia et dolorem voluptatem!
                    </BioSection>
                    <BioSection>
                        <BioYear>2008</BioYear>
                        Quo dolorem nesciunt At iste molestiae et pariatur
                        consectetur id autem aperiam qui dicta ullam a corrupti
                        facere.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Interests
                    </Heading>

                    <BioSection>Some text...</BioSection>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>

                    <List>
                        <ListItem>
                            <Link
                                href="https://github.com/SeverusVape"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @SeverusVape
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="#" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoDiscord} />}
                                >
                                    SeverusVape#3589
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link
                                href="https://www.linkedin.com/in/sergei-koshelev-289314153/"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoLinkedin} />}
                                >
                                    Severus Vape
                                </Button>
                            </Link>
                        </ListItem>
                    </List>

                    <SimpleGrid columns={[1, 1, 1]} gap={6}>
                        <GridItem
                            href="#"
                            title="My LinkedIn Profile"
                            thumbnail={thumbLinkedIn}
                        ></GridItem>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    );
};

export default Page;
