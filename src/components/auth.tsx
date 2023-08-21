import React, {useEffect, useState} from "react";

interface Props {
    username: string;
    password: string;
};

export const authHandler = ({username, password}: Props) => {
    const [authstatus, setAuthstatus] = useState(false);
    username = "dammy";
    password = "dammy";
    useEffect(() => {
        if (username === "dammy" && password === "dammy") {
            setAuthstatus(true);
        } else {
            setAuthstatus(false);
        }
    }, [authstatus]);
};