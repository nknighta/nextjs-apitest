import {ReactNode} from "react";
import MainLayout from "@/layout/main";
import {Box, Text, Container} from "@chakra-ui/react";
import Link from "next/link";

About.getLayout = (page: ReactNode) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default function About() {
    return (
        <Container pt={10} maxW={"container.lg"}>
            <Text fontSize={30}>
                about VARIUS
            </Text>
            <Box pt={8} pb={8}>
                <Text fontSize={22}>Country</Text>
                <Text>Takasaki ,Gunma, Japan</Text>
            </Box>
            <Box pt={8} pb={8}>
                <Text fontSize={22}>Social</Text>
                <Box color={"#0055ff"}>
                    <Link href={"#"}>
                        <Text>Discord</Text>
                    </Link>
                    <Link href={"https://x.com/ama_dev_1"}>
                        <Text>Owner X(Twitter)</Text>
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}