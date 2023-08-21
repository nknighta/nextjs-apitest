import React from "react";
import {FooterLayout, HeaderLayout} from "./layout";
import {ChakraProvider} from "@chakra-ui/react";

interface Props {
    children?: React.ReactNode;
}

const SimpleLayout: React.FC<Props> = ({ children }: Props) => {
    return (
        <ChakraProvider>
            <HeaderLayout/>
            {/* ===== main ===== */}
            <main>{children}</main>
            {/* ===== /main ===== */}
            <FooterLayout/>
        </ChakraProvider>
    );
};

export default SimpleLayout;