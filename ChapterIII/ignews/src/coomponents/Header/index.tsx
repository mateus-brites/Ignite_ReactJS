import { SignInButton } from '../SingInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news"/>
                <nav>
                {/* <nav> menu de navegação */}
                    <a  className={styles.active}>Homes</a>
                    <a>Posts</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}