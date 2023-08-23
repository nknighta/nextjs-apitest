import React from "react";
import {FooterLayout, HeaderLayout} from "./layout";
import {ChakraProvider} from "@chakra-ui/react";
import { SessionProvider} from "next-auth/react";
import {Box} from "@chakra-ui/react";

interface Props {
    children?: React.ReactNode;
    name?: string;
    image?: any;
    email?: string;
}

function SimpleLayout ({children}: Props) {
    return (
        <SessionProvider>
            <ChakraProvider>
                <Box bgColor={"#000021"} color={"#fff"}>
                    <HeaderLayout/>
                    {/* ===== main ===== */}
                    <main>{children}</main>
                    {/* ===== /main ===== */}
                    <FooterLayout/>
                </Box>
            </ChakraProvider>
        </SessionProvider>
    );
};

export default SimpleLayout;