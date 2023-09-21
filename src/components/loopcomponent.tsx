import {
    Box, Container
} from '@chakra-ui/react'
import {useWindowSize} from "react-use";

export default function FooterLoopComponent() {
    const {width, height} = useWindowSize();
    let linkarr = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "About",
            link: "/about"
        },
    ];
    console.log(linkarr)
    return (
        <Container maxW={"container.xl"} bgColor={"#000"} color={"#0055ff"}>

            <Box display={width > 900 ? "flex" : "block"}>
                {linkarr.map((link) => {
                    return (
                        <Box p={4} m={4}>
                            <a href={link.link}>{link.name}</a>
                        </Box>
                    )
                })}
            </Box>
        </Container>
    )
};