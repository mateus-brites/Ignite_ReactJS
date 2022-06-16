import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends  LinkProps{
    icon: ElementType;
    children: string
    href: string;
}

export function NavLink({ icon, children, href ,...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display='flex' alignSelf='center' {...rest} >
                <Icon as={icon} fontSize='28' />
                <Text ml='2' mt='0.5' fontWeight='medium'>{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}