import React, {ReactNode} from "react";
import MainLayout from "@/layout/main";
import {Button, Center, Container, Input, Link, Text,Box} from "@chakra-ui/react";
import {signIn, signOut, useSession} from "next-auth/react";
import useWindowSize from "@/components/multilayout";
export default function Signup() {
    const size = useWindowSize();
    return (
        <>
            <Text>{size.width}</Text>
            <Box display={size.width > 1000 ? "flex": "inline-block"} w={"100%"}>
                <Container>
                    <Center m={10}>
                        <Text fontSize={23}>Signup</Text>
                    </Center>
                    <Center m={5}>
                        <Input placeholder={"email"}/>
                    </Center>
                    <Center m={5}>
                        <Input placeholder={"password"}/>
                    </Center>
                </Container>
                <Container>
                    <LoginBtn/>
                </Container>
            </Box>
        </>
    )
};

function LoginBtn() {
    const {data: session} = useSession();
    console.log(session);
    return session ? (
        <>
            <Link href={"/user"}>My Page</Link>
            <Button onClick={() => signOut()}>SignOut</Button>
        </>
    ) : (
        <>
            <Button onClick={() => signIn()}>SignIn</Button>
        </>
    );
};

Signup.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}