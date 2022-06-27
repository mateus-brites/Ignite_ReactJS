import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from 'react-query'

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    const { data, isLoading, error } = useQuery('users', async () => { // Chave que será armaznada no cache
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json()

        return data
    }) 

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(data => console.log(data))
    })
    return (
        <Box>
            <Header />

            <Flex  w='100%' my='6' maxWidth={1400} mx='auto' px='6'>
                <Sidebar />
                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex bg='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                        <Link href="/users/create">
                        <Button 
                            as='a' 
                            size='sm' 
                            fontSize='sm'
                            colorScheme='pink'
                            leftIcon={<Icon as={RiAddLine} />}
                            >
                                Criar novo
                        </Button>
                        </Link>
                    </Flex>
                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
                        <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuários</Th>
                                <Th>Data de cadastro</Th>
                                <Th width='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.users.map(user => {
                                return (
                                    <Tr>
                                        <Td px='6'>
                                            <Checkbox colorScheme='pink' />
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Text fontWeight='bold'>{user.name}</Text>
                                                <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                                            </Box>
                                        </Td>
                                        <Td>{String(new Date(user.created_at).toLocaleDateString('pt-br'))}</Td>
                                        <Td>
                                        <Button 
                                        as='a' 
                                        size='sm' 
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} />}
                                        >
                                            Editar
                                        </Button>
                                        </Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                </Table>  
                <Pagination />
                </>
                    )}
                </Box>             
            </Flex>
        </Box>
    )
}