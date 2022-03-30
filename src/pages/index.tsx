import layouts from "@Layouts/index"
import styles from "./Home.module.css"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
  return (
    <div className={styles.Page}>
      Home
    </div>
  )
}


Home.layout = layouts.DefaultLayout;
Home.auth=false;
export async function getStaticProps(context: any) {
  const { locale } = context;
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  }
}
export default Home
