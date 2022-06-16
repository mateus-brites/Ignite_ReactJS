import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {
    // irá mostrar as informações de nome e email somente quando estiver no tamanho large da tela
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1400}
            h="28"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Logo />
            {isWideVersion && <SearchBox />}
            <Flex align="center" ml="auto">
                <NotificationNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}