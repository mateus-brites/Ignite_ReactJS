import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
    return (
        // Box é uma div
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start'>
                <Box>
                    <Text fontWeight='bold' color='gray.400' fontSize='small'>GERAL</Text>
                    <Stack spacing='4' mt='8' align='stretch'>
                        <Link display='flex' alignSelf='center'>
                            <Icon as={RiDashboardLine} fontSize='28' />
                            <Text ml='2' mt='0.5' fontWeight='medium'>Dashboard</Text>
                        </Link>
                        <Link display='flex' alignSelf='center'>
                            <Icon ml='-5' as={RiContactsLine} fontSize='28' />
                            <Text ml='2' mt='0.5' fontWeight='medium'>Usuário</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight='bold' color='gray.400' fontSize='small'>AUTOMAÇÂO</Text>
                    <Stack spacing='4' mt='8' align='stretch'>
                        <Link display='flex' alignSelf='center'>
                            <Icon as={RiInputMethodLine} fontSize='28' />
                            <Text ml='2' mt='0.5' fontWeight='medium'>Formulários</Text>
                        </Link>
                        <Link display='flex' alignSelf='center'>
                            <Icon as={RiGitMergeLine} fontSize='28' />
                            <Text ml='2' mt='0.5' fontWeight='medium'>Automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}