import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationNav() {
    return (
        // Espaçamento entre os elementos:
        <HStack
            spacing="4"
            mx="8"
            pr="8"
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
        > 
        <Icon as={RiNotificationLine} fontSize="28" type="button" />
        <Icon as={RiUserAddLine} fontSize="28" type="button" _hover={{color: 'yellow'}}/>
    </HStack>
    )
}