import {signIn, signOut, useSession} from "next-auth/react";
import {Box, Button, Text} from "@chakra-ui/react";
import React ,{useEffect,useState} from "react";
import Image from "next/image";

interface LoginUserProps {
    name: string;
    email: string;
    image: any;
}

export const Login = ()  => {
    const authenticate = status();
    const [userdata, setUserdata] = useState<LoginUserProps>(
        {
            name: "",
            email: "",
            image: ""
        }
    );

    useEffect(() => {
        if (authenticate) {
            const {data: session} = useSession();
            setUserdata({
                name: session.user.name,
                email: session.user.email,
                image: session.user.image
            });
        } else {
            setUserdata({
                name: "",
                email: "",
                image: ""
            });
        }
    }, [authenticate]);
    return userdata;
}

const status = () => {
    const {data: session} = useSession();
    const [authstatus, setAuthstatus] = useState<boolean>(false);
    useEffect(() => {
        if (session) {
            setAuthstatus(true);
        } else {
            setAuthstatus(false);
        }
    }, []);
    return authstatus;
};