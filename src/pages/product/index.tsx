import {ReactNode} from "react";
import MainLayout from "@/layout/main";
import {Text, Box} from "@chakra-ui/react";
import Link from "next/link";
import gbox from "@/script/box.module.css";
import useWindowSize from "@/components/multilayout";
import HMeta from "@/components/header";

Product.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default function Product() {
    const {width} = useWindowSize();
    return (
        <>
            <HMeta pagetitle={"Products"} pagedes={"VARIUS development tools"}/>
            {/**
             *
             backgroundAttachment: scroll
             background-color: rgba(0, 0, 0, 0);
             background-image: linear-gradient(to right, rgb(255, 176, 60), rgb(255, 112, 141));
             background-position: 0% 0%;
             background-repeat: repeat;
             color: rgb(255, 255, 255);
             */}
            <Box p={width > 1000 ? "10vh 20vh": "10vh 10vh"}>
                <div style={{
                    background: "linear-gradient(to right, #7856ff, #000021 )",
                    color: "#ff3300",
                    padding: "50px",
                    height: "40vh",
                }}>
                    <Text fontSize={30}>
                        Product
                    </Text>
                </div>
                <div>
                    <Box m={8}>
                        <Link href={"/product/vx"}>
                            <Text fontSize={33}>
                                VX
                            </Text>
                            <Text fontSize={20} color={"#7785ff"}>
                                - web3 global developmemt platform
                            </Text>
                        </Link>
                    </Box>
                    <Box m={8}>
                        <Link href={"/product/indexlanguage"}>
                            <Text fontSize={33}>
                                indexlanguage
                            </Text>
                            <Text fontSize={20} color={"#7785ff"}>
                                - Fast create of full stack web application
                            </Text>
                        </Link>
                    </Box>
                </div>
            </Box>
        </>
    );
}