import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-items";

import thumbFishWorkflow from "../public/images/contents/youtube-fish-workflow.jpg";
import thumbMyDeskSetup from "../public/images/contents/youtube-my-desk-setup.jpg";
import thumb500PaidUsers from "../public/images/contents/blog-500-paid-users.jpg";
import thumbFinancialGoal from "../public/images/contents/blog-financial-goal.jpg";
import thumbHowToPriceYourself from "../public/images/contents/blog-how-to-price-yourself.jpg";
import thumb50xFaster from "../public/images/contents/youtube-50x-faster.jpg";

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="My Workflow"
                        thumbnail={thumbFishWorkflow}
                        href="#"
                    ></GridItem>

                    <GridItem
                        title="My Financial Goals"
                        thumbnail={thumbFinancialGoal}
                        href="#"
                    ></GridItem>

                    <GridItem
                        title="My Desk Setup"
                        thumbnail={thumbMyDeskSetup}
                        href="#"
                    ></GridItem>

                    <GridItem
                        title="First 500 Paid Users"
                        thumbnail={thumb500PaidUsers}
                        href="#"
                    ></GridItem>
                </SimpleGrid>
            </Section>

            <Section delay={0.2}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="How To Price Yourself"
                        thumbnail={thumbHowToPriceYourself}
                        href="#"
                    />
                    <GridItem
                        title="Youtube faster 50x times"
                        thumbnail={thumb50xFaster}
                        href="#"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
);

export default Posts;
