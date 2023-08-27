import React, {ReactNode} from "react";
import MainLayout from "../layout/main";
import {
    Box, Container,
} from "@chakra-ui/react";
import HMeta from "@/components/header";
import {Type} from "@/components/typeanimetion";
import Link from "next/link";
import useWindowSize from "@/components/multilayout";

Home.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            <Box pl={{base: 2, md: 4, lg: "15vh", xl: "20vh"}}
                 pr={{base: 2, md: 4, lg: "15vh", xl: "20vh"}}>
                {page}
            </Box>
        </MainLayout>
    )
}
export default function Home() {
    const {width} = useWindowSize();
    const autow = width > 1000 ? "auto" : "100%";
    return (
        <div>
            <HMeta pagetitle={"Home"}/>
            <Container maxW={""} h={400} mt={10} mb={10}>
                <Type input={"Let's make web3 apps amazingly fast, amazingly cheap, and amazingly easy."}/>
                <Container>
                    <Link href={"/signup"}>
                        Join us!
                    </Link>
                </Container>
            </Container>
            <Container maxW={"container.lg"}>
                <Box p={4} w={autow} h={400} bgColor={"#ffffff50"} ml={width > 1000 ? 16: 4} mr={width > 1000 ? 16: 4}  mt={16} mb={16}>
                    hey
                </Box>
            </Container>
        </div>
    )
}
