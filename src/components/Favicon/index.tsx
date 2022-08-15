import Head from "next/head";

export function Favicon() {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
}
