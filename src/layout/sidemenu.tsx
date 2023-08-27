import React from 'react'
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
    Input, Box
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import Link from "next/link";
import {UserBtn} from "@/layout/layout";

export default function DrawerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    let w= 10;
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
                <DrawerOverlay />
                <DrawerContent
                    bgColor={"#090361"}
                    color={"#fff"}>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        VARIUS HOME
                    </DrawerHeader>

                    <DrawerBody bgColor={"#090361"}>
                        <Input placeholder='Search' />
                        <Box p={2}/>
                        <UserBtn/>
                    </DrawerBody>

                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}