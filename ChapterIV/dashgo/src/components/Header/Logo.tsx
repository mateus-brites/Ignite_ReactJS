import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        // Podemos tornar o componente responsivo dando mais de uma opção de tamanho da seguinte forma: ["2xl", "3xl"]
        <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="tight" w="64">
            Dashdog
            <Text as="span" ml="1" color="pink.500">.</Text>
        </Text>
    )
}