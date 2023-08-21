import React from 'react';
import DrawerMenu from "./sidemenu";
import {Box, Text} from "@chakra-ui/react";

export const HeaderLayout = () => {
    return (
        <div>
            <Box display={"flex"} p={5} bgColor={"#000021"} color={"#ff4500"}>
                <Box fontSize={22} boxShadow={"0 0 .77em #ff4500"} bgColor={"transparent"} p={3.2}>
                    VARIUS
                </Box>
            </Box>
        </div>
    );
}

export const FooterLayout = () => {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    );
};