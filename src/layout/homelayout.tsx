import {Box, Text, Container} from "@chakra-ui/react";
import {styled} from "styled-components";
import {ChakraProvider} from "@chakra-ui/react";
import Image from "next/image";
import {FooterLayout} from "@/layout/layout";
import useWindowSize from "@/components/multilayout";

type DynamicImageProps = {
    src: any;
    alt: string;
    imgwidth: number;
}

// home global style
const HomeCompoennt = styled(Box)`
  font-family: 'Verdana', monospace;
  background-color: #000021;
  position: relative;
`;

const HomeBgImage = styled.div`
  top: 0;
  right: 0;
  height: 800px;
  width: 700px;
  border: red solid 1px;
  position: absolute;
  z-index: 0;
  font-size: 10vh;
  color: #ffffff66;
`;

// home gradient bgcolor styling
const HomeComponentGradient = styled.div`
  background-image: linear-gradient(to right, #000024, #000024, #000024, #000058, #6844bb);
`;

// Footer Layout component
const HomeLayoutFooter = styled.div`
  padding: 3rex;
  color: #fff;
  height: auto;
`;


const HomeLayoutFooterContent = styled.div`
  display: flex;
  margin: 10px;
  justify-content: flex-end;
`;

const HomeLayoutFooterContentText = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const DynamicImageLayout = (props: DynamicImageProps) => {
    const {width} = useWindowSize();
    const  {src, alt, imgwidth} = props;
    const imagew = width > 880 ? imgwidth == null ? 300 : imgwidth : imgwidth + 100;
    return (
        <div style={{objectFit: "cover"}}>
            <Image src={src} alt={alt} width={imagew} height={imagew} />
        </div>
    );
};


const HomeHeader = ({children}: any) => {
    const {width} = useWindowSize();
    return (
        <Box p={2}
             w={"100%"}
             display={width > 880 ?"flex" : "none"}
             alignItems={"center"}
             borderRadius={10}
             justifyContent={"flex-end"}
             boxShadow={"0 0 45px #7856ff80"}
             color={"#fff"}
             bgColor={"#7856ff80"}>
            {children}
        </Box>
    )
}
const HomeLayoutShiter = ({children, space}: any) => {
    return (
        <div style={{
            color: "#fff",
            width: space == null ? "70px" : space
        }}>
            {children}
        </div>
    )
};

export default function HomeLayout({children}) {
    let c = 0;
    return (
        <HomeCompoennt>
            <ChakraProvider>
                <HomeComponentGradient>
                    <Box display={"flex"}>
                        <Box color={"#8905ff"} wordBreak={"break-word"} w={400} m={10}>
                            <DynamicImageLayout src={"/hometxt3.png"} alt={"hometext"} imgwidth={800}/>
                        </Box>
                        <Box color={"#fff"} w={800} ml={200} mt={"7vh"} zIndex={1}>
                            <HomeHeader>
                                <Box fontSize={20} m={"0 20px"}>
                                    Home
                                </Box>
                                <Box fontSize={20} m={"0 20px"}>
                                    Home
                                </Box>
                                <Text fontSize={30} m={"0 20px"}>
                                    VARIUS {c}
                                </Text>
                            </HomeHeader>
                        </Box>
                        {/* background content */}
                        <HomeBgImage>
                            <DynamicImageLayout src={"/itembox.png"} alt={"dammy"} imgwidth={500}/>
                        </HomeBgImage>
                    </Box>

                    {/*=== main content ===*/}
                    <main>
                        {children}
                    </main>
                    {/*=== main content ===*/}

                    <HomeLayoutFooter>
                        <HomeLayoutFooterContent>
                            <HomeLayoutFooterContentText>
                                <Text fontSize={30}>
                                    Products
                                </Text>
                                <Text fontSize={30}>
                                    Docs
                                </Text>
                            </HomeLayoutFooterContentText>
                        </HomeLayoutFooterContent>
                        <HomeLayoutFooterContent>
                            <HomeLayoutFooterContentText>
                                <Text fontSize={30}>
                                    Downloads
                                </Text>
                                <Text fontSize={30}>
                                    Downloads
                                </Text>
                            </HomeLayoutFooterContentText>
                            <HomeLayoutShiter space={"100px"}/>
                        </HomeLayoutFooterContent>
                    </HomeLayoutFooter>
                    <FooterLayout/>
                </HomeComponentGradient>
            </ChakraProvider>
        </HomeCompoennt>
    )
        ;
}