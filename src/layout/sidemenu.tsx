import React, {useEffect} from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Box,
    Text
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import Link from "next/link";
import {UserBtn} from "@/layout/layout";
import {useRouter} from "next/router";

export default function DrawerMenu() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();
    let w = 10;
    const router = useRouter();
    useEffect(() => {
        router.events.on('routeChangeComplete', () => {
            onClose();
        });
    }, []);
    return (
        <>
            <Button ref={btnRef} bgColor={"#090361"} onClick={onOpen} color={"#fff"} w={w} h={w}
                    _hover={{
                        bgColor: "#090391"
                    }}
            >
                <HamburgerIcon w={8} h={8}/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent
                    bgColor={"#090361"}
                    color={"#fff"}>
                    <DrawerCloseButton/>
                    <DrawerHeader>
                        VARIUS HOME
                    </DrawerHeader>

                    <DrawerBody bgColor={"#090361"}>
                        <Box p={2}/>
                        <UserBtn/>

                        <Box m={6}>
                            <Box p={2}>
                                <Link href={"/product"}>Product</Link>
                            </Box>
                            <Box p={2}>
                                <Link href={"/search"}>Search</Link>
                            </Box>
                        </Box>

                    </DrawerBody>

                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}