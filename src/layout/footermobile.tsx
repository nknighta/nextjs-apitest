import {
    Box, Container
} from '@chakra-ui/react'

export default function Footermobile() {
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
        <Container maxW={"container.xl"} bgColor={"#000"}>
            <Box color={"#0055ff"}>
                {linkarr.map((link) => {
                    return (
                        <Box>
                            <a href={link.link}>{link.name}</a>
                        </Box>
                    )
                })}
            </Box>
        </Container>
    )
};