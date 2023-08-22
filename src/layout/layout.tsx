import React from 'react';
import {Box, Button, Image, Text} from "@chakra-ui/react";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";

export function HeaderLayout() {
    return (
        <Box
            bgColor={"#000021"}
            color={"#ff4500"}
            display={"flex"}>
            <Box
                 p={5}
                 w={"50%"}>
                <Link href={"/"}>
                    <Box fontSize={22}
                         boxShadow={"0 0 .77em #ff4500"}
                         bgColor={"transparent"}
                         p={3.2}
                         textAlign={"center"}
                        w={100}>
                        VARIUS
                    </Box>
                </Link>
            </Box>
            <Box w={"50%"} pr={10}>
                <HeaderAccountBtn/>
            </Box>
        </Box>
    );
}

function HeaderAccountBtn() {
    const {data: session} = useSession();
    console.log(session);
    const BtnLayout = ({children}) => {
        return (
            <Box display={"flex"} alignItems={"center"} h={"100%"} justifyContent={"flex-end"} w={"100%"}>
                {children}
            </Box>
        )
    };
    return session ? (
        <BtnLayout>
            <Link href={"/user"}>My Page</Link>
            <Button onClick={() => signOut()}>SignOut</Button>
        </BtnLayout>
    ) : (
        <BtnLayout>
            <Button onClick={() => signIn()}>SignIn</Button>
        </BtnLayout>
    );
};

export function FooterLayout() {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    );
};