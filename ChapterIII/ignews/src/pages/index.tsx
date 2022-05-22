import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../coomponents/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

interface HomeProduct {
  product:{
    priceId: string;
    amount: number;
  }
}

export default function Home(props: HomeProduct) {
  const product = props.product
  return (
    <>
    <Head>
      <title>Home | Ignews</title>
    </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, welcome </span>
        <h1>News about the <span>React</span> world</h1>
        <p>
          Get acess to all the publication <br />
          <span>for {product.amount} monthly</span>
        </p>
        <SubscribeButton priceId={product.priceId} />

      </section>
      <img src='/images/avatar.svg' alt='girls coding' />
    </main>
    </>
  )
}
// tudo que retornarmos de props aqui poderemos utilizar dentro do componente Home compo propriedade
export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1L238OIhkTTwHkXI1I4ivRei'); // API ID
  expend: ['product'] // para ter acesso a todas as informações do produto

  
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return ({ props: { product, } })
}