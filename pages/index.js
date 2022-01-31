import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I'm Joseph.
          I'm a free and open source software advocate, and love working for open source projects in my spare time.
          Here is where you'll find some of the software, tools, scripts and various useful programs
          I've made over the years.
        </p>
      </section>
    </Layout>
  )
}
