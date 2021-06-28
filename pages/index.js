import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS + Docker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p>Hello World</p>
        <img src='http://placekitten.com/200/300' alt='kitten'/>
      </div>
    </div>
  )
}
