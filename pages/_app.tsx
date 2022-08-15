import type { AppProps } from "next/app";
import { GlobalStyle } from "components/GlobalStyle";
import Head from "next/head";
import { OpenGraph } from "components/OpenGraph";
import { DocumentTitle } from "components/DocumentTitle";
import { Favicon } from "../src/components/Favicon";

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
