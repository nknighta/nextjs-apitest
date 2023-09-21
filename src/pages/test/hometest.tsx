import HomeLayout from "@/layout/homelayout";
import {ReactNode} from "react";

TestPageH.getLayout = function getLayout(page: ReactNode) {
    return (
        <HomeLayout>
            {page}
        </HomeLayout>
    )
}

export default function TestPageH () {
    return (
        <>
            <p>test</p>
        </>
    );
}