import NextLink from "next/link";
import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue,
    Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                p={3}
                mb={6}
                align="center"
            >
                Hello I&apos;m a full-stack developer based in USA!
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
                    Sctn#1(WORK?)
                </Heading>
                <Paragraph>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.{" "}
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
                    Complited Master&apos;s in University of ...
                </BioSection>
                <BioSection>
                    <BioYear>2200</BioYear>
                    국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.
                    헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지
                    아니하고는 파면되지 아니한다. 군사법원의 조직·권한 및
                    재판관의 자격은 법률로 정한다, 국민경제의 발전을 위한
                    중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여
                    국민경제자문회의를 둘 수 있다.
                </BioSection>
                <BioSection>
                    <BioYear>2300</BioYear>
                    국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.
                    헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지
                    아니하고는 파면되지 아니한다.
                </BioSection>
                <BioSection>
                    <BioYear>3090</BioYear>
                    군사법원의 조직·권한 및 재판관의 자격은 법률로 정한다,
                    국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의
                    자문에 응하기 위하여 국민경제자문회의를 둘 수 있다.
                </BioSection>
            </Section>
        </Container>
    );
};

export default Page;
