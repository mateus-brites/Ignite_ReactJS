import { FaGithub} from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';
import { signIn, useSession, signOut } from "next-auth/react"

// dentro de signIn devemos informar qual tipo de autenticação iremos utilizar naquele botão
// useSession retorna informações se o usuário está em um sessão ativa
export function SignInButton() {
    const { data } = useSession() // retorna informações do usuário e informa se ele está ativo ou não
    console.log(data)
    return data ? (
    <button type="button" className={styles.signInButton} onClick={() => signOut()}>
        <FaGithub color='#04b361' />
        {data.user.name}
        <FiX color='#737380' className={styles.closeIcon} />
    </button>) : (
        <button type="button" className={styles.signInButton} onClick={() => signIn('github')}>
        <FaGithub color='#eba417' />
        Sign in with Github
        <FiX color='#737380' className={styles.closeIcon} />
    </button>
    )
}