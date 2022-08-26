import { ENV } from "constant/env";

const { BRIDE, GROOM, TIME, PLACE_NAME, GROOM_FIRST_NAME, BRIDE_FIRST_NAME } =
  ENV;

export function OpenGraph() {
  return (
    <>
      <meta
        name="twitter:title"
        content={`${GROOM} 🤍 ${BRIDE} 결혼식에 초대해요.`}
      />
      <meta name="twitter:description" content={`${TIME} ${PLACE_NAME}`} />
      <meta
        name="twitter:image"
        content="https://wisdom-kangto.s3.ap-northeast-2.amazonaws.com/OG_800_400.jpg"
      />
      <meta
        name="twitter:site"
        content={`https://${GROOM_FIRST_NAME}${BRIDE_FIRST_NAME}.site`}
      />
      <meta
        property="og:title"
        content={`${GROOM} 🤍 ${BRIDE} 결혼식에 초대해요.`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://${GROOM_FIRST_NAME}${BRIDE_FIRST_NAME}.site`}
      />
      <meta
        property="og:url"
        content={`https://${encodeURIComponent(
          `${GROOM_FIRST_NAME}${BRIDE_FIRST_NAME}`
        )}.site`}
      />
      <meta property="og:url" content="https://www.xn--939aq67ceni1c.site" />
      <meta property="og:description" content={`${TIME} ${PLACE_NAME}`} />
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
