import {Box, Flex, Text} from "@chakra-ui/react";
import {styled} from "styled-components";
import {ChakraProvider} from "@chakra-ui/react";
import Image from "next/image";
import {FooterLayout} from "@/layout/layout";
import useWindowSize from "@/components/multilayout";
import {Type} from "@/components/typeanimetion";
import fontstyle from "@/script/font.module.sass";
import {VT323} from "@next/font/google";
import {useEffect} from "react";

// home global style

const LayoutDynamics = styled.div`
  width: 800px;
  height: 600px;
  word-break: break-word;
  font-size: 2.2rem;
  font-family: 'VT323', monospace;
  margin: 10px;
  padding: 0 60px;
    @media (max-width: 800px) {
        width: 800px;
        height: 600px;
        word-break: break-word;
        font-size: 2.2rem;
        font-family: 'VT323', monospace;
        margin: 10px;
        padding: 0 60px;
        color: #7840ff;
    }
`;
const HomeCompoennt = styled(Box)`
  font-family: 'Verdana', monospace;
  background-color: #000021;
  position: relative;
`;

// home gradient bgcolor styling
const HomeComponentGradient = styled.div`
  background-image: linear-gradient(to right, #000024, #000024, #000024, #000058, #6844bb);
`;

const VT323Font = VT323({
    weight: "400",
    preload: false
})

export default function HomeLayout({children}) {
    const {width} = useWindowSize();
    return (
        <HomeCompoennt>
            <ChakraProvider>
                <HomeComponentGradient>
                    <Box h={130} p={10} color={"#fff"}>
                        <Box className={VT323Font.className}>
                            <Box display={["flex", "block"]}>
                                <div style={{marginLeft: width > 880 ? 40 : 10}}>
                                    <Text fontSize={40}>
                                        VARIUS
                                    </Text>
                                    <Text fontSize={20}>
                                        awesome web3 and metaverse apps
                                    </Text>
                                </div>
                                <div>
                                    a
                                </div>
                            </Box>
                        </Box>
                    </Box>
                    <LayoutDynamics>
                        <div className={fontstyle.Main}>
                            <Type input={"varius@vx:~$ Hello Web3 'n' metaverse! Let's make web3 and nft apps..."}/>
                        </div>
                    </LayoutDynamics>
                    <Box display={"flex"}>
                        {/* background content */}                    </Box>

                    {/*=== main content ===*/}
                    <main>
                        {children}
                    </main>
                    {/*=== main content ===*/}
                    <FooterLayout/>
                </HomeComponentGradient>
            </ChakraProvider>
        </HomeCompoennt>
    )
        ;
}