import React, {useEffect, ReactNode, useState} from "react";
import MainLayout from "../layout/main";
import {
    Box,
    Button,
    Text
} from "@chakra-ui/react";
import ScrollableBox from "../components/scroll";
import {VideoElement} from "../components/video";
import {Type} from "../components/typeanimetion";

Home.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            <Box pl={{base: 5, md: 7, lg: "15vh", xl: "20vh"}}
                 pr={{base: 5, md: 7, lg: "15vh",  xl: "20vh"}}>
                {page}
            </Box>
        </MainLayout>
    )
}
export default function Home() {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);
    return (
        <div>
            <Type input={"Awesome and powerfull web3 platform."}/>
            <ScrollableBox>
                <p>bro</p>
            </ScrollableBox>
            {width}
            <Box bgColor={"#000"} color={"#fff"} position={"relative"} w={700} overflowWrap={"anywhere"}>
                <Text position={"absolute"} fontSize={60} >
                    DUCK DUCK GO YO YO YOKOHAMA
                </Text>
                <VideoElement src={"/video.mp4"}/>
            </Box>
        </div>
    )
};


const ChangetextColor = () => {
    const [color, setColor] = React.useState("red");
    const [textsize, setTextsize] = React.useState(20);
    return (
        <div>
            <Button onClick={() => setColor("blue")}>Blue</Button>
            <Button onClick={() => setColor("red")}>Red</Button>
            <Button onClick={() => setTextsize(40)}>Big</Button>
            <Button onClick={() => setTextsize(20)}>Small</Button>
            <h1 style={{
                color: color,
                fontSize: textsize
            }}>Change Color</h1>

        </div>
    )
};


const CountButton = ({countprops, upvalue}: { countprops: number, upvalue: number }) => {
    const [count, setCount] = React.useState(countprops);
    return (
        <div>
            <Button onClick={() => setCount(count + upvalue)}>Click me</Button>
            <h1>{count}</h1>
        </div>
    )
}

const FormComponent = () => {
    return (
        <form>
            <div style={{
                height: "auto",
                width: 600,
                backgroundColor: "gray",
                borderRadius: 50,
                paddingLeft: 20,
                paddingRight: 20,
            }}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    style={{
                        height: 40,
                        width: "100%",
                        backgroundColor: "gray",
                        outline: "none",
                        border: "none",
                        fontSize: 20,
                    }}/>
            </div>
        </form>
    );
};

const FetchDataTest = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("/api")
            .then(response => response.json())
            .then(json => setData(json))
            .catch( e=> setData("Error"));
    }, [data]);
    return (
        <Box w={410}>
            <h1>Fetch Data</h1>
            <h1>{data}</h1>
        </Box>
    )
}
