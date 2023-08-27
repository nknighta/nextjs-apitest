import React, {ReactNode} from 'react';
import MainLayout from '../../layout/main';
import {useSession, signIn, signOut} from "next-auth/react";
import {Box, Text, Image, Button} from "@chakra-ui/react";
import {useRouter} from "next/router";
import windowSize from "@/components/multilayout";

User.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

function User() {
    const {width} = windowSize();
    const {data: session} = useSession();
    const paddig = width > 990 ? 10 : 2;
    const router = useRouter();
    console.log(session);
    return session ? (
        <ProfileLayout>
            <Box display={"flex"}>
                <Box w={500} p={paddig}>
                    <Image src={session.user.image} alt={session.user.name} borderRadius={100} w={200}/>
                </Box>
                <div>
                    <p>Name</p>
                    <Text
                    　　 bgColor={"#000021"}
                        color={"#fff"}
                        p={3}
                        fontSize={26}>
                        {session.user.name}
                    </Text>
                    <p>Email</p>
                    <Text
                        bgColor={"#000021"}
                        color={"#fff"}
                        p={3}
                        fontSize={26}>
                        {session.user.email}
                    </Text>
                </div>
            </Box>

            <Button
                w={300}
                onClick={() => signOut()}>
                SignOut
            </Button>
        </ProfileLayout>
    )
        :
        (
            <>
            a</>
        )
    ;
}
function ProfileLayout({children}) {
    const {width} = windowSize();
    const paddig = width > 990 ? 24 : 8;
    return (
        <Box pl={paddig} pr={paddig} pt={10} pb={10}>
            {children}
        </Box>
    )
}

export default User;