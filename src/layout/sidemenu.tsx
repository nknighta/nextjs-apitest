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
    Input
} from '@chakra-ui/react'

export default function DrawerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
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
                    </DrawerBody>

                    <DrawerFooter>
                        <Button>Sign in</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}