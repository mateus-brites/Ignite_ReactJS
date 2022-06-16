import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex alignItems="center">
        <Box
            mr="4"
            textAlign="right">
            <Text
            >
                Nome do usuário
            </Text>
            <Text
                color="gray.300"
                fontFamily="small"
            >
                Email do usuário
            </Text>
        </Box>
        <Avatar size="md" name='Mateus Brites' src='' />
    </Flex>
    )
}