// import '../stylesheets/_global.less'
import 'antd/dist/antd.less'; // or 'antd/dist/antd.less'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: any) {

  const Layout=Component?.layout||(({children}:any)=><>{children}</>);
  return <Layout><Component {...pageProps} /></Layout>
}

MyApp.getInitialProps = async ({Component, ctx}:any) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  if (Object.keys(pageProps).length > 0) {
    return {pageProps};
  } else {
    return {};
  }
};

export default MyApp
