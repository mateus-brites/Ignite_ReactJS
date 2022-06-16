import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface NavLinkProps extends  LinkProps{
    icon: ElementType;
    children: string
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
    return (
        <Link display='flex' alignSelf='center' {...rest} >
            <Icon as={icon} fontSize='28' />
            <Text ml='2' mt='0.5' fontWeight='medium'>{children}</Text>
        </Link>
    )
}