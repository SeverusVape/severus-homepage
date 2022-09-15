import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
    <Layout title="example">
        <Container>
            <Title>
                Example <Badge>2021-2022</Badge>
            </Title>
            <P>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="#">
                        https://example.com/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>NodeJS, Electron, React Native</span>
                </ListItem>
                <ListItem>
                    <Meta>Blogpost</Meta>
                    <Link href="#">
                        Link to info about this project{" "}
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/works/example_01.jpg" alt="example" />
            <WorkImage src="/images/works/example_02.jpg" alt="example" />
            <AspectRatio maxW="640px" ratio={1.7} my={4}>
                <iframe
                    src="https://www.youtube.com/embed/-SMKVJO_wGo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </AspectRatio>
        </Container>
    </Layout>
);

export default Work;
