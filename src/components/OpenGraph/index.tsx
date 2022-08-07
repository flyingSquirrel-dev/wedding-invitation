import { ENV } from "constant/env";

const { BRIDE, GROOM } = ENV;

export function OpenGraph() {
  return (
    <>
      <meta
        property="og:title"
        content={`${GROOM} 🤍 ${BRIDE} 결혼식에 초대해요.`}
      />
      <meta property="og:type" content="website" />
      {/* TODO: og:url 추가하기 */}
      <meta property="og:url" content="" />
      {/* TODO: og:description 추가하기  */}
      <meta property="og:description" content="Welcome to my blog!" />
      <meta
        property="og:image"
        content="https://wisdom-kangto.s3.ap-northeast-2.amazonaws.com/OG_800_400.jpg"
      />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="400" />
      <meta
        property="og:image"
        content="https://wisdom-kangto.s3.ap-northeast-2.amazonaws.com/OG_1200_630.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image"
        content="https://wisdom-kangto.s3.ap-northeast-2.amazonaws.com/OG_1200_630.jpg"
      />
      <meta
        property="og:image:alt"
        content={`${GROOM} 🤍 ${BRIDE} 결혼식에 초대해요.`}
      />
    </>
  );
}
