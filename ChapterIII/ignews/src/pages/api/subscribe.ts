import { NextApiRequest, NextApiResponse} from 'next'
import { getSession } from 'next-auth/react'
import { stripe } from '../../services/stripe';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method = 'POST') {
        const session = await getSession({ req });

        const stripeCustomer = await stripe.customers.create({
            email: session.user.email,
            // metadata
        })
        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required', // diz se quer obrigar o usuário a preencher o endereço ou não
            line_items: [{ price: 'price_1L238OIhkTTwHkXI1I4ivRei', quantity: 1}],
            mode: 'subscription', // pagamento recorrente
            allow_promotion_codes: true, // permite código de cupom
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,
        })

        return res.status(200).json({ sessionId: stripeCheckoutSession.id })
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed')
    }
}