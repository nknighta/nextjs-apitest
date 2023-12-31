import React, {ReactNode} from "react";
import MainLayout from "@/layout/main";
import {Button, Center, Container, Input, Link, Text, Box} from "@chakra-ui/react";
import {signIn, signOut, useSession} from "next-auth/react";
import useWindowSize from "@/components/multilayout";
import HMeta from "@/components/header";

export default function Signup() {
    const size = useWindowSize();
    const {data: session} = useSession();
    return (
        <Box>
            <Box display={size.width > 1000 ? "flex" : "inline-block"} w={"100%"} mt={10} mb={10}>
                <HMeta pagetitle={"Signup"} pagedes={"Create Account Page"}/>
                <Container>
                    <Center m={10}>
                        <Text fontSize={28}>Signup</Text>
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
                        <Text fontSize={28}>Other Accounts Signup</Text>
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
                                GitHub
                            </Button>
                        </Center>
                    )}
                </Container>
            </Box>
            <Container>
                if you have an account, please Login
            </Container>
        </Box>
    )
};

Signup.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}