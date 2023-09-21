import React, {ReactNode, ChangeEvent} from 'react'
import {PrismaClient} from "@prisma/client";
import {useRouter} from "next/router";
import MainLayout from "@/layout/main";
import {Box, Text, Flex} from "@chakra-ui/react";
import HMeta from "@/components/header";

User.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}


function Searchform() {
    const query = useRouter();
    const name = query.query.name;
    return (
        <div style={{
            padding: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
        }}>
            <input
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    query.push(`/search?name=${e.target.value}`)
                }}
                onBlur={() => {
                    query.push(`/search`)
                }
                }
                style={{
                    color: "#fff",
                    fontSize: 20,
                    borderBottom: "1px solid red",
                    backgroundColor: "#000021",
                    width: 800,
                    outline: "none",
                }}/>
        </div>
    )
}

export default function User(props: any) {
    const query = useRouter();
    const name = query.query.name;
    console.log("success load content");
    let x = props.user;
    return (
        <div>
            <Text fontSize={30} m={2}>Indexer</Text>
            <HMeta pagetitle={name == null ? "Search" : "Search of " + name} pagedes={"search"}/>
            <>
                <Flex>

                </Flex>
                <Searchform/>
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
            </>
            <p>Database index result (DEV)</p>
            <pre style={{
                height: 500,
                overflow: "scroll",
                width: 700,
                margin: 20,
            }}>
                <code>
                    {
                        JSON.stringify(x, null, 2)
                    }
                </code>
            </pre>
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
