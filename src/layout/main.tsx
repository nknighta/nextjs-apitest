import React from "react";
import {FooterLayout, HeaderLayout} from "./layout";
import {ChakraProvider} from "@chakra-ui/react";
import {SessionProviderProps, SessionProvider} from "next-auth/react";
import {AppProps} from "next/app";

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
                <HeaderLayout/>
                {/* ===== main ===== */}
                <main>{children}</main>
                {/* ===== /main ===== */}
                <FooterLayout/>
            </ChakraProvider>
        </SessionProvider>
    );
};

export default SimpleLayout;