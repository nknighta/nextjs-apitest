import {Html, Head, Main, NextScript} from 'next/document';
import DrawerMenu from "../layout/sidemenu";
import React from "react";

export default function Docs() {
    return (
        <Html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
};