import {Box, Flex, Text} from "@chakra-ui/react";
import {styled} from "styled-components";
import {ChakraProvider} from "@chakra-ui/react";
import Image from "next/image";
import {FooterLayout} from "@/layout/layout";
import useWindowSize from "@/components/multilayout";
import {Type} from "@/components/typeanimetion";
import textstyle from "@/script/font.module.sass"

// home global style

const HomeCompoennt = styled(Box)`
  font-family: 'Verdana', monospace;
  background-color: #000021;
  position: relative;
`;

// home gradient bgcolor styling
const HomeComponentGradient = styled.div`
  background-image: linear-gradient(to right, #000024, #000024, #000024, #000058, #6844bb);
`;

export default function HomeLayout({children}) {
    const {width} = useWindowSize();
    return (
        <HomeCompoennt>
            <ChakraProvider>
                <HomeComponentGradient>
                    <Box h={130} p={10} color={"#fff"}>
                        <Box display={["flex", "block"]}>
                            <div style={{marginLeft: width > 880 ? 40 : 10}}>
                                <Text fontSize={40}>
                                    VARIUS
                                </Text>
                                <Text fontSize={20}>
                                    awesome web3 and metaverse apps
                                </Text>
                            </div>
                        </Box>

                    </Box>
                    <Box h={600}
                         pl={width > 1000 ? 40 : 10}
                         bgColor={{base: "#550000", md: "#000066"}}
                         fontSize={{base:20, md:40 }}
                         w={width > 1000 ? 700 : 600}>
                        <div className={textstyle.Hometext}>
                            <Type input={"varius@vx:~$ Hello Web3 'n' metaverse! Let's make web3 and nft apps..."}/>
                        </div>
                    </Box>

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