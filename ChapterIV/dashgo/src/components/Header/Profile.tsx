import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData=true }: ProfileProps) {
    return (
        <Flex alignItems="center">
        {showProfileData && (
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
        )}
        <Avatar size="md" name='Mateus Brites' src='' />
    </Flex>
    )
}