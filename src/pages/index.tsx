import React, {ReactNode} from "react";
import MainLayout from "../layout/main";
import {
    Box, Container,
} from "@chakra-ui/react";
import HMeta from "@/components/header";
import {Type} from "@/components/typeanimetion";
import prisma from "../../src-server/lib/prisma";
import Link from "next/link";

Home.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            <Box pl={{base: 5, md: 7, lg: "15vh", xl: "20vh"}}
                 pr={{base: 5, md: 7, lg: "15vh", xl: "20vh"}}>
                {page}
            </Box>
        </MainLayout>
    )
}
export default function Home() {
    return (
        <div>
            <HMeta pagetitle={"Home"}/>
            <Type input={"hey bro "}/>
            <Container>
                <Link href={"/signup"}>
                    Join us!
                </Link>
            </Container>
        </div>
    )
}
