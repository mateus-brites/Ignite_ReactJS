import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import Router from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerContextProps {
    children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn;

export const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerCProvider({ children }: SidebarDrawerContextProps) {
    const disclosure = useDisclosure() // informa se a sidebar está aberta / fechada
    // aciona toda vez que o caminho da url mudar
    useEffect(() => {
        disclosure.onClose()
    }, [Router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)