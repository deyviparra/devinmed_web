import Head from 'next/head'
import s from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Esta es la página inicial
    </div>
  )
}
