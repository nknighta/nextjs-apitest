import MainLayout from "@/layout/main";
import {ReactNode} from "react";
import { Icon , Button, Box} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
Consoles.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default function Consoles() {
    return ( 
        <>
            <Box p={4}>
                Console
            </Box>
            <Box p={4}>
                <Button>
                    <Icon as={AddIcon}/>
                </Button>
            </Box>
            <Box p={4}>
                Applications
                <Box h={150} w={150} bgColor={"#fff"} color={"#000"} borderRadius={20}>
                    testApp
                </Box>
            </Box>
        </>
    );
}