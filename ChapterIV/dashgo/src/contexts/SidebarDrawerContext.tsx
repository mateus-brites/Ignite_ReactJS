import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import {useRouter} from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerContextProps {
    children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn;

export const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerCProvider({ children }: SidebarDrawerContextProps) {
    const disclosure = useDisclosure() // informa se a sidebar está aberta / fechada
    const router = useRouter()
    // aciona toda vez que o caminho da url mudar
    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)