import { Flex, Icon, Input, HStack, Text, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
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
           <Text 
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
                >
                Dashdog
            <Text 
                as="span"
                ml="1"
                color="pink.500"
                >.
            </Text>
            
            </Text>
            {/* Esse Flex precisa estar abaixo do Text que está encapsulando ele*/}
            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxW={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
                >
                <Input 
                color="gray.50"
                variant="unstyled"
                px="4"
                mr="4"
                placeholder="Pesquise na plataforma"
                _placeholder={{ color: 'gray.400'}}
                />
                <Icon as={RiSearchLine} fontSize="20" />
            </Flex>

            <Flex
                align="center"
                ml="auto"
            >
                {/*Mesma coisa o Stack porém mantem os itens ao lado um do outro */}
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
            </Flex>
        </Flex>
    )
}