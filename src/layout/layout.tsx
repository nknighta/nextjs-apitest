import React from 'react';
import {Box, Button, Container, Icon, Center, Text, ButtonGroup} from "@chakra-ui/react";
import Link from "next/link";
import {useRouter} from "next/router";
import DrawerMenu from "@/layout/sidemenu";
import useWindowSize from "@/components/multilayout";
import {signIn, signOut, useSession} from "next-auth/react";
import {VscVmConnect} from "react-icons/vsc";
import {AiOutlineUser} from "react-icons/ai";

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
    const {width} = useWindowSize();
    const mode: string = width > 1000 ? "flex" : "block";
    const {data: session, status} = useSession();
    return (
        <BtnLayout>
            <Box display={"flex"}
                 visibility={mode === "flex" ? "visible" : "hidden"}>
                <Link href={"/"}>
                    <Text>
                        Products
                    </Text>
                </Link>
                <Box pl={5}/>
                <Link href={"/"}>
                    <Text>
                        Downloads
                    </Text>
                </Link>
                <Box pl={5}/>
                <Link href={"/"}>
                    <Text>
                        Docs
                    </Text>
                </Link>
                <Box pl={5}/>
            </Box>
            {session ? (
                <>
                    <UserBtn/>
                </>
            ) : (
                <Link href={"/signup"}>
                    <Button>SignUp</Button>
                </Link>
            )}
        </BtnLayout>
    )
}

export function UserBtn () {
    const router = useRouter();
    const {data: session} = useSession();
    return (
        <ButtonGroup size='md' isAttached variant='outline'>
            <Button bgColor={"#4499ff"} onClick={
                () => router.push("/dashboard")
            }>
                <Icon as={VscVmConnect}/>
            </Button>{
            session ? (
                <Button bgColor={"#2277ff"} onClick={
                    () => router.push("/account")
                }>
                    <Icon as={AiOutlineUser}/>
                </Button>
            ) : (
                <Button bgColor={"#2277ff"} onClick={
                    () => router.push("/signup")
                }>
                    <Icon as={AiOutlineUser}/>
                </Button>
            )
        }
        </ButtonGroup>
    )
}

const BtnLayout = ({children}) => {
    const {width} = useWindowSize();
    const mode: string = width > 1000 ? "flex" : "block";
    return (
        <Box display={mode}
             alignItems={"center"}
             h={"100%"}
             w={"100%"}
             justifyContent={"flex-end"}
             visibility={mode === "flex" ? "visible" : "hidden"}
        >
            {children}
        </Box>
    )
};


export function FooterLayout() {
    const size: { width: any, height: any } = useWindowSize();
    const mode: string = size.width > 880 ? "flex" : "block";
    const wideval: string = size.width > 880 ? "50%" : "100%";
    let date = new Date();
    return (
        <Box bg={"#000"}>
            <Container maxW={"container.lg"}
                       p={10}>
                <Center>
                    @Nknight AMAMIYA 2023 - {date.getFullYear()}
                </Center>
                <Box p={5}/>
                <Box display={mode}
                     maxWidth={"container.xl"}>
                    <Box
                        w={wideval}
                        color={"#0055ff"}>
                        <Link href={"#"}>
                            <Text>Home</Text>
                        </Link>
                        <Box p={2}/>
                        <Link href={"#"}>
                            <Text>API</Text>
                        </Link>
                        <Box p={2}/>
                        <Link href={"#"}>
                            <Text>Applications</Text>
                        </Link>
                        <Box p={2}/>
                    </Box>
                    <Box
                        w={wideval}
                        color={"#0055ff"}>
                        <Link href={"/about"}>
                            <Text>About VARIUS</Text>
                        </Link>
                        <Box p={2}/>
                        <Link href={"#"}>
                            <Text>
                                Terms of Use
                            </Text>
                        </Link>
                        <Box p={2}/>
                        <Link href={"#"}>
                            <Text>
                                Factory
                            </Text>
                        </Link>
                    </Box>
                    <Box
                        w={wideval}
                        color={"#0055ff"}>
                        <Link href={"#"}>
                            <Text>_projectV</Text>
                        </Link>
                        <Box p={2}/>
                        <Link href={"#"}>
                            <Text>
                                Fondation
                            </Text>
                        </Link>
                        <Box p={2}/>
                        <Link href={"#"}>
                            <Text>
                                Platforms
                            </Text>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
