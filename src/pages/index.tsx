import React, {useEffect, ReactNode, useState} from "react";
import MainLayout from "../layout/main";
import {
    Box,
    Button,
    Text
} from "@chakra-ui/react";
import ScrollableBox from "../components/scroll";
import {VideoElement} from "../components/video";


Home.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
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
            <h1>ReactJS</h1>
            <h1>NextJS</h1>
            <CountButton countprops={10} upvalue={1000}/>
            <ChangetextColor/>
            <FormComponent/>
            <FetchDataTest/>
            <ScrollableBox>
                <p>bro</p>
                "VX API v0.3 VARIUS dev team and nknight amamiya 2023\n Hello World!",
                547148787347611808835434574833210687306837506063501860367182036155657802564750471140784105831542480862352862768745366340727533380047378474168174876368081375310612556517008166580262503735380321637078802870731742217110352325668345437761204267554354037741618501005262330153361635020782313705701402351365
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
