import React, {ReactNode} from 'react';
import MainLayout from '../../layout/main';
import {useSession, signIn, signOut} from "next-auth/react";
import {Box, Text, Image} from "@chakra-ui/react";


User.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

function User() {
    const {data: session} = useSession();
    console.log(session);
    return session ? (
        <ProfileLayout>
            <Box display={"flex"}>
                <Box w={300}>
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
        </ProfileLayout>
    ) : (
        <ProfileLayout>
            <Text>Please Login</Text>
            <button onClick={() => signIn()}>SignIn</button>
        </ProfileLayout>
    );
}

function ProfileLayout({children}) {
    return (
        <Box p={8}>
            {children}
        </Box>
    )
}

export default User;