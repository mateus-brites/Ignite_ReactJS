import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
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
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  )
}