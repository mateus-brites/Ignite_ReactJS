import { loadStripe } from '@stripe/stripe-js';

export async function getStripeJs() {
    // obs: a única forma de declararmos uma variável de ambiente pública é iniciando seu nome com NEXT_PUBLIC_
    const stripeJs = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

    return stripeJs
}