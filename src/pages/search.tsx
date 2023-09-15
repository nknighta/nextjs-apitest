import React, {ReactNode, useEffect, useState} from 'react'
import {PrismaClient} from "@prisma/client";
import {useRouter} from "next/router";
import MainLayout from "@/layout/main";
import {Box,Text} from "@chakra-ui/react";
import HMeta from "@/components/header";

User.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

// json is slow, so need to improve

export default function User(props: any) {
    const query = useRouter();
    const name = query.query.name;
    console.log("success load content");
    return (
        <div>
            <Text fontSize={30} m={2}>UserData</Text>
            <HMeta pagetitle={name == null ? "Search" : "Search of " + name} pagedes={"search"}/>
            <Box>
                {props.user.map((item: any) => {
                    if (item.name == name) {
                        return (
                            <div key={item.id}>
                                <p>{item.name}</p>
                            </div>
                        )
                    }
                })}
            </Box>
            {JSON.stringify(props.user)}
        </div>
    )
};

export async function getServerSideProps(props: any) {
    const prisma = new PrismaClient();
    const user = await prisma.user.findMany()
    return {
        props: {
            user,
        },
    };
}
