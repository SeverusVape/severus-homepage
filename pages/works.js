import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-items";

import thumbExample from "../public/images/works/example_eyecatch.jpg";
import thumbSecondWork from "../public/images/works/work2_eyecatch.jpg";
import thumbThirdWork from "../public/images/works/work3_eyecatch.jpg";
import thumbFourthWork from "../public/images/works/work4_eyecatch.jpg";
import thumbFifthWork from "../public/images/works/work5_eyecatch.jpg";
import thumbSixWork from "../public/images/works/work6_eyecatch.jpg";
import thumbSeventhWork from "../public/images/works/work7_eyecatch.jpg";
import thumbEighthWork from "../public/images/works/work8_eyecatch.jpg";

const Works = () => {
    return (
        <Layout>
            <Container>
                {/* PERSONAL WORK PROJECTS SECTION ??? */}
                <Heading as="h3" fontSize={20} mb={4}>
                    SECTION#1(Works)
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="example"
                            title="Example"
                            thumbnail={thumbExample}
                        >
                            An example of work
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="secondwork"
                            title="SecondWork"
                            thumbnail={thumbSecondWork}
                        >
                            Example of another work
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.1}>
                        <WorkGridItem
                            id="thirdwork"
                            title="ThirdWork"
                            thumbnail={thumbThirdWork}
                        >
                            Example of anothew work
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id="fourthwork"
                            title="FourthWork"
                            thumbnail={thumbFourthWork}
                        >
                            Example of anothew work
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                {/* CALLOBORATIONS SECTION ??? */}
                <Section delay={0.2}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        SECTION#2(Collaborations???)
                    </Heading>

                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        <Section delay={0.3}>
                            <WorkGridItem
                                id="fifthwork"
                                title="FifthWork"
                                thumbnail={thumbFifthWork}
                            >
                                Example of anothew work
                            </WorkGridItem>
                        </Section>
                        <Section delay={0.3}>
                            <WorkGridItem
                                id="sixwork"
                                title="SixWork"
                                thumbnail={thumbSixWork}
                            >
                                Example of anothew work
                            </WorkGridItem>
                        </Section>
                    </SimpleGrid>
                </Section>

                {/* SECTION ??? */}
                <Section delay={0.4}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        SECTION#3
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.5}>
                        <WorkGridItem
                            id="seventhwork"
                            title="SeventhWork"
                            thumbnail={thumbSeventhWork}
                        >
                            Example of another work
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem
                            id="eighthwork"
                            title="EighthWork"
                            thumbnail={thumbEighthWork}
                        >
                            Example of another work
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Works;
