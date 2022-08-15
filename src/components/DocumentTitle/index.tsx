import { ENV } from "constant/env";
import Head from "next/head";

const { BRIDE, GROOM } = ENV;

export function DocumentTitle() {
  return (
    <Head>
      <title>{`${GROOM} 🤍 ${BRIDE} 결혼식에 초대해요.`}</title>
    </Head>
  );
}
