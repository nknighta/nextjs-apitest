import React, {ReactNode} from "react";
import HMeta from "@/components/header";
import MainLayout from "@/layout/main";
import {Button, Center, Container, Input, Link, Text, Box} from "@chakra-ui/react";
import {signIn, signOut, useSession} from "next-auth/react";
import useWindowSize from "@/components/multilayout";
import {RiGithubFill} from "react-icons/ri";

Signin.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
};

export default function Signin () {
    const size = useWindowSize();
    const {data: session} = useSession();
    return (
        <>
            <HMeta pagedes={"Signin"} pagetitle={"Signin"}/>
            <Box display={size.width > 1000 ? "flex" : "inline-block"} w={"100%"} mt={10} mb={10}>
                <Container>
                    <Center m={10}>
                        <Text fontSize={28}>SignIn</Text>
                    </Center>
                    <Center m={5}>
                        <Input placeholder={"email"}/>
                    </Center>
                    <Center m={5}>
                        <Input placeholder={"password"}/>
                    </Center>
                </Container>
                <Container>
                    <Center m={10}>
                        <Text fontSize={28}>Accounts SignIn</Text>
                    </Center>
                    {session ? (
                        <Center>
                            <Link href={"/account"}>My Page</Link>
                            <Button
                                w={300}
                                onClick={() => signOut()}>SignOut</Button>
                        </Center>
                    ) : (
                        <Center>
                            <Button
                                w={300}
                                onClick={() => signIn()}>
                                <RiGithubFill/>
                                <Box pr={2}/>
                                GitHub
                            </Button>
                        </Center>
                    )}
                </Container>
            </Box>
        </>
    );
}