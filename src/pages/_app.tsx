// import "../styles/custom-antd.less"; // Add this line 

import { Spin } from "antd";
import { appWithTranslation } from 'next-i18next';
// import 'antd/dist/antd.less'; // or 'antd/dist/antd.less'
import Router from "next/router";
import { useEffect, useState } from "react";
// import '../stylesheets/_global.less';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  const Layout = Component?.layout || (({ children }: any) => <>{children}</>);
  // if(!Component.auth**){

  // }
  return loading ?
    <Spin></Spin> : 
    
    <SessionProvider session={session}>
      <Layout><Component {...pageProps} /></Layout>
    </SessionProvider>

}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  if (Object.keys(pageProps).length > 0) {
    return { pageProps };
  } else {
    return {};
  }
};

export default appWithTranslation(MyApp)
