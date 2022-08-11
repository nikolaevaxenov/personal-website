import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Simple URL shortener" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
