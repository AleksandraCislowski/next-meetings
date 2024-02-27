import Head from "next/head";
import Notification from "../components/ui/notification";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
      <Notification title='test' message='wohooo test' status='pending' />
    </Layout>
  );
}

export default MyApp;
