import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
    const isDrawerSidebar = useBreakpointValue( {
        // quando o tamanho for base: true, quando o tamanho for lg: false
        base: true,
        lg: false,
    })

    const { isOpen, onClose } = useSidebarDrawer()

    if(isDrawerSidebar) {
        return (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent bg='gray.800' p='4'>
                    <DrawerCloseButton mt='6'/>
                    <DrawerHeader>Navegação2</DrawerHeader>
                    <SidebarNav />
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        )
    }

    return (
        // Box é uma div
        <Box as='aside' w='64' mr='8'>
            <SidebarNav />
        </Box>
    )
}