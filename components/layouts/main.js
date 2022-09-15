import Head from "next/head";
import Navbar from "../navbar";
import dynamic from "next/dynamic";
import { Box, Container } from "@chakra-ui/react";
import VoxelSpaceLoader from "../voxel-space-loader";

const LazyVoxelSpace = dynamic(() => import("../voxel-space"), {
    ssr: false,
    loading: () => <VoxelSpaceLoader />,
});

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Severus Vape - Homepage</title>
            </Head>

            <Navbar path={router.asPath}></Navbar>

            <Container maxW="container.md" pt={14}>
                <LazyVoxelSpace />
                {children}
            </Container>
        </Box>
    );
};

export default Main;
