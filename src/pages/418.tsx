import React,{ReactNode} from "react";
import MainLayout from "@/layout/main";
import {Center, Text} from "@chakra-ui/react";

Teapod.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default function Teapod() {
    return (
        <Center>
            <Text fontSize={40}>I&apos;m a TEAPOT.(^^ )</Text>
        </Center>
    )
}