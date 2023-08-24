import React, {useEffect, ReactNode, useState, useRef} from "react";
import MainLayout from "../layout/main";
import {
    Box,
} from "@chakra-ui/react";
import HMeta from "@/components/header";
import {Type} from "@/components/typeanimetion";
import prisma from "../../src-server/lib/prisma";
import {GetServerSideProps} from "next";

Home.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            <Box pl={{base: 5, md: 7, lg: "15vh", xl: "20vh"}}
                 pr={{base: 5, md: 7, lg: "15vh", xl: "20vh"}}>
                {page}
            </Box>
        </MainLayout>
    )
}
export default function Home() {
    const [width, setWidth] = useState(0);
    //const getcountvalue = getServerSideProps();
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);
    return (
        <div>
            <HMeta pagetitle={"test"}/>
            <Type input={"hey bro "}/>
        </div>
    )
}

const FetchDataTest = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("/api")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(e => setData("Error"));
    }, [data]);
    return (
        <Box w={410}>
            <h1>Fetch Data</h1>
            <h1>{data}</h1>
        </Box>
    )
}
