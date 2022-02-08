import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, {siteTitle} from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Link href="/blog">
          Blog
        </Link>
        <p>Hello I'm Joseph.
          I'm a free and open source software advocate, and love working for open source projects in my spare time.
        </p>
      </section>
    </Layout>
  )
}
