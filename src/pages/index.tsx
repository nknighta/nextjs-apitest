import React, {ReactNode} from "react";
import MainLayout from "../layout/main";
import HomeLayout from "@/layout/homelayout";
import {
    Box, Container,
} from "@chakra-ui/react";
import HMeta from "@/components/header";
import {Type} from "@/components/typeanimetion";
import useWindowSize from "@/components/multilayout";
import { GrBox } from "@/components/gbox";

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
export default function Home() {
    const {width} = useWindowSize();
    const autow = width > 1000 ? "auto" : "100%";
    return (
        <div>
            <HMeta pagetitle={"Home"} pagedes="Home"/>
            <Container maxW={""} h={400} mt={10} mb={10} color={"#fff"}>
                <Type input={"Let's make web3 apps amazingly fast, and amazingly easy."}/>
            </Container>
        </div>
    )
}
function GrBoxSamle ({children}:any) {
    return (
        <div style={{
            backgroundAttachment: "scroll",
            backgroundColor: "rgba(0, 0, 0, 0)",
            backgroundImage: "linear-gradient(to right, #000067, #7856ff)",
            backgroundRepeat: "repeat",
            color: "rgb(255, 255, 255)",
            height: 200,
            width: 600,
            margin: 20,
            boxShadow: "0 5px 30px 15px #000099",
            padding:30
        }}>
            {children}
        </div>
    );
}