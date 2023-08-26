import React from 'react';
import {Box, Button, Container, Center, Text} from "@chakra-ui/react";
import Link from "next/link";
import DrawerMenu from "@/layout/sidemenu";
import useWindowSize from "@/components/multilayout";

export function HeaderLayout() {
    return (
        <Box
            bgColor={"#090361"}
            color={"#ff4500"}
            display={"flex"}
            pl={{base: 5, md: 7, lg: "5vh"}}
            pr={{base: 5, md: 7, lg: "5vh"}}>
            <Box
                p={5}
                w={"50%"}>
                <Button
                    bgColor={"#090361"}
                    color={"#fff"}
                    variant={"ghost"}
                    fontSize={24}
                    borderRadius={0}
                    _hover={{
                        bgColor: "#090391"
                    }}>
                    <Link href={"/"}>VARIUS</Link>
                </Button>
            </Box>
            <Box w={"50%"} pr={10}>
                <HeaderPage/>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
                <DrawerMenu/>
            </Box>
        </Box>
    );
}

function HeaderPage() {
    return (
        <BtnLayout>
            <Link href={"/signup"}>
                <Button>SignUp</Button>
            </Link>
        </BtnLayout>
    )
}

const BtnLayout = ({children}) => {
    return (
        <Box display={"flex"}
             alignItems={"center"}
             h={"100%"}
             w={"100%"}
             justifyContent={"flex-end"}
        >
            {children}
        </Box>
    )
};


export function FooterLayout() {
    const size:{width:any, height:any} = useWindowSize();
    const mode: string = size.width > 880 ? "flex" : "block";
    const wideval: string = size.width > 880 ? "50%" : "100%";
    return (
        <Box bg={"#000"}>
            <Container maxW={"container.lg"}
                       p={10}>
                <Center>
                    @Nknight AMAMIYA 2023
                </Center>
                <Box display={mode}
                     maxWidth={"container.xl"}>
                    <Box
                        w={wideval}>
                        <Link href={"#"}>
                            <Text color={"#0055ff"}>Home</Text>
                        </Link>
                        <Link href={"#"}>
                            <Text color={"#0055ff"}>API</Text>
                        </Link>
                        <Link href={"#"}>
                            <Text color={"#0055ff"}>Applications</Text>
                        </Link>
                    </Box>
                    <Box
                         w={wideval}>
                        1
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
