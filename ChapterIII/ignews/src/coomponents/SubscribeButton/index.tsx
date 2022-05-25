import { useSession, signIn } from 'next-auth/react';
import styles from './styles.module.scss';

interface SubscripeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscripeButtonProps) {
    const { data } = useSession();

    function handleSubscribe() {
        if(!data) {
            signIn('github')
            return;
        }
        
    }
    return (
        <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
            Subscribe now
        </button>
    )
}