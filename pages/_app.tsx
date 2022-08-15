import { DocumentTitle } from "components/DocumentTitle";
import { Favicon } from "components/Favicon";
import { GlobalStyle } from "components/GlobalStyle";
import { OpenGraph } from "components/OpenGraph";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DocumentTitle />
      <Favicon />
      <Head>
        <GlobalStyle />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <OpenGraph />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
