import layouts from "@Layouts/index"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from "./Home.module.less"
import { Button } from "antd"
import Head from 'next/head'

const Home = () => {

  return (
    <div className={styles.Page}>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      Home

      <Button type="primary">Click</Button>
    </div>
  )
}
Home.layout = layouts.DefaultLayout;
Home.auth = false;
export async function getStaticProps(context: any) {
  const { locale } = context;
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  }
}
export default Home
