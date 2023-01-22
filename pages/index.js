import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="THSS Robotics " />
        <p className="description">
          hi this is our website
        </p>
        <p id="offset"><code>if you have ideas for what this website should like, please tell me </code></p>
        <p><code>I'm probably going to make a subdomain for the 'claw for humanity?' or should it just be on the main page?</code></p>
        <p><code>is 'claw for humanity' the final name for the project? we should do a vote</code></p>
        <p id="offset"><code>if you have any experience in webdev please let me know</code></p>
      </main>

      <Footer />
    </div>
  )
}
