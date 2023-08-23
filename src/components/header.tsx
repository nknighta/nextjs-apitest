import Head from "next/head";
import {useState} from "react";

export default function HMeta({pagetitle}:{pagetitle:string}) {
    const defaulttitle = " | VARIUS";
    const disptitle = pagetitle ? pagetitle + defaulttitle : defaulttitle;
    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>{disptitle}</title>
            <link rel="icon" href="/favicon.png"/>
        </Head>
    )
};