import {ReactNode} from "react";
import MainLayout from "@/layout/main";
import { Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import HMeta from "@/components/header";
import { GrBox } from "@/components/gbox";
Product.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default function Product() {
    return (
        <>
            <HMeta pagetitle="VX" pagedes="development of Web3 application"/>
            <Box p={"5vh 10vh"}>
                <Text fontSize={40}>Create of useful, easy, and faster own web3 platform.</Text>
                Features:
                <GrBox>
                    1. Web3 wallet add
                </GrBox>
                <GrBox>
                    2. Client NFT collectioning and trading
                </GrBox>
            </Box>
        </>
    );
}
