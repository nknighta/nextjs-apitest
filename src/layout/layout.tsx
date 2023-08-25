import React from 'react';
import {Link, Box, Button} from "@chakra-ui/react";
import {signIn, signOut, useSession} from "next-auth/react";
import NextLink from "next/link";
import DrawerMenu from "@/layout/sidemenu";

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
                    <NextLink href={"/"}>VARIUS</NextLink>
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

function HeaderPage () {
    return (
        <BtnLayout>
            <NextLink href={"/signup"}>
                <Button>SignUp</Button>
            </NextLink>
        </BtnLayout>
    )
}
const BtnLayout = ({children}) => {
    return (
        <Box display={"flex"} alignItems={"center"} h={"100%"} justifyContent={"flex-end"} w={"100%"}>
            {children}
        </Box>
    )
};


export function FooterLayout() {
    return (
        <Box>
            @Nknight AMAMIYA 2023
        </Box>
    );
};