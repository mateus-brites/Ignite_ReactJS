import { Button, Stack } from "@chakra-ui/react";

export function Pagination() {
    return (
        <Stack direction='row' mt='8' spacing='6' justify='space-between' align='center'>
            
            <p>0 - 10 de 100</p>
            <Stack direction='row' spacing='2'>
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                disabled
                _disabled={{
                    bg: 'pink.500',
                    cursor: 'default'
                }}
            >
                1
            </Button>
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                bg='gray.700'
                _hover={{
                    bg: 'gray.500',
                    
                }}
            >
                2
            </Button>
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                bg='gray.700'
                _hover={{
                    bg: 'gray.500',
                    
                }}
            >
                3
            </Button>
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                bg='gray.700'
                _hover={{
                    bg: 'gray.500',
                    
                }}
            >
                4
            </Button>
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                bg='gray.700'
                _hover={{
                    bg: 'gray.500',
                    
                }}
            >
                5
            </Button>
            </Stack>
        </Stack>
    )
}