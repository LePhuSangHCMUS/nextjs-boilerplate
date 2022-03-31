import layouts from "@Layouts/index"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from "./Home.module.css"
import { Button } from "antd"
const Home = () => {
  return (
    <div className={styles.Page}>
      Home

      <Button type="primary">Click</Button>
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
