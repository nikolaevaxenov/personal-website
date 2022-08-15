import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <meta name="description" content="Simple URL shortener" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
