import Head from "next/head";
import {useState} from "react";

export default function HMeta({pagetitle, pagedes}:{pagetitle:string, pagedes:string}) {
    const defaulttitle = " | VARIUS";
    const description = "VARIUS is a web3 global development platform.";
    const disptitle = pagetitle ? pagetitle + defaulttitle : defaulttitle;
    const dispdescription = description ? pagedes + description : description;
    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>{disptitle}</title>
            <link rel="icon" href="/favicon.png"/>
            <meta name="description" content={dispdescription}/>
        </Head>
    )
};