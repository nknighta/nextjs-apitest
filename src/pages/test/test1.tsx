import HomeLayout from "@/layout/homelayout";
import {ReactNode} from "react";
import FooterLoopComponent from "@/components/loopcomponent";
import {Text} from "@chakra-ui/react";

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
            <FooterLoopComponent/>
        </>
    );
}