import { Button, Flex, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w='100vm' h='100vh' align='center' justify='center'>
      <Flex 
        as='form' 
        width='100%' 
        maxWidth={300} 
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDirection='column'
      >
        <Stack spacing="4">  {/* Define espaçamento entre os elementos */}
          <FormControl>  {/* Define espaçamento entre os elementos */}
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email" 
              id="email"
              type='email' 
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant='filled'
              _hover={{
                bgColor: 'gray.900'
              }}
              size='lg'
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input 
              name="password" 
              id="password"
              type='password' 
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant='filled'
              _hover={{
                bgColor: 'gray.900'
              }}
              size='lg'
            />
          </FormControl>

        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  )
}