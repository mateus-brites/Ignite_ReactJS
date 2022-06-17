import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useForm } from 'react-hook-form'

interface SignInFormData {
  email: string;
  password: string
}

export default function SignIn() {
  const { register, handleSubmit } = useForm()

  function handleSignIn(values: SignInFormData) {
    console.log(values)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">  {/* Define espaçamento entre os elementos */}
          <Input name="email" type="email" label="E-mail" {...register('email')}/>
          <Input name="password" type="password" label="Senha" {...register('password')}/>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  )
}