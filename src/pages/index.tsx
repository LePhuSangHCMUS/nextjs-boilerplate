import layouts from "@Layouts/index"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from "./Home.module.less"
import { Button } from "antd"
import Head from 'next/head'
import { getProviders } from "next-auth/react"
import { signIn } from "next-auth/react"
const Home = () => {


  const providers = getProviders().then(result => {
    console.log("Providers", result)

  })

  const handleLogin = () => {
    signIn("credentials", {
      name: "12",
      password: "12121",
      callbackUrl: `${window.location.origin}/dashboard`
    }).then(function (result: any) {

      if (result.error !== null) {
        if (result.status === 401) {
          console.log("Your username/password combination was incorrect. Please try again");
        }
        else {
          // setLoginError(result.error);
        }
      }
      else {
        // router.push(result.url);
      }
    }).catch(err => {
      console.log(err);

    });
  }
  return (
    <div className={styles.Page}>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      Home

      <Button type="primary" onClick={handleLogin}>Login</Button>
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
