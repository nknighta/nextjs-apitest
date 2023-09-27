import React, {ReactNode} from "react";
import HomeLayout from "@/layout/homelayout";
import {
    Box, Center, Container, Text
} from "@chakra-ui/react";
import HMeta from "@/components/header";
import {Type} from "@/components/typeanimetion";
import useWindowSize from "@/components/multilayout";
import styled from "styled-components";

Home.getLayout = function getLayout(page: ReactNode) {
    return (
        <HomeLayout>
            <Box pl={{base: 2, md: 4, lg: "15vh", xl: "20vh"}}
                 pr={{base: 2, md: 4, lg: "15vh", xl: "20vh"}}>
                {page}
            </Box>
        </HomeLayout>
    )
}

const StyledLink = styled.a`
  color: #0055ff;
`;
export default function Home() {
    const {width} = useWindowSize();
    return (
        <Box>
            <HMeta pagetitle={"Home"} pagedes="Home"/>
            <Container maxW="container.md"
                       color={"#fff"}
                       marginBottom={10}>
                <Box>
                    <Center fontSize={30} color={"#7856ff"}>
                        What's VX?
                    </Center>
                    <div style={{fontSize: 20}}>
                        VX is a collection of libraries and extensions that allow you to easily build virtual currency
                        payment and profit systems, NFT buying and selling, and metaverse worlds in your own
                        applications.
                    </div>
                </Box>
                <Box p={10}/>
                <Box>
                    <Center fontSize={30} color={"#7856ff"}>
                        Extensions
                    </Center>
                    <Center fontSize={20}>
                        Layer 2 payment system
                    </Center>
                </Box>
            </Container>
        </Box>
    )
}

function GrBoxSamle({children}: any) {
    return (
        <div style={{
            backgroundAttachment: "scroll",
            backgroundColor: "rgba(0, 0, 0, 0)",
            backgroundImage: "linear-gradient(t\o right, #000067, #7856ff)",
            backgroundRepeat: "repeat",
            color: "rgb(255, 255, 255)",
            height: 200,
            width: 600,
            margin: 20,
            boxShadow: "0 5px 30px 15px #000099",
            padding: 30
        }}>
            {children}
        </div>
    );
}