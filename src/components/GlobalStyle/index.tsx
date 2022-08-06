import { css, Global } from "@emotion/react";
import { DEFAULT_BACKGROUND_COLOR } from "constant/style";

export function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

const globalStyle = css`
  @font-face {
    font-family: "SeoulHangang";
    font-weight: 400;
    font-style: normal;
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/seoulhangang/SeoulHangangLight.eot");
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/seoulhangang/SeoulHangangLight.eot?#iefix")
        format("embedded-opentype"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/seoulhangang/SeoulHangangLight.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/seoulhangang/SeoulHangangLight.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/seoulhangang/SeoulHangangLight.ttf")
        format("truetype");
    font-display: swap;
  }

  body {
    display: flex;
    background: ${DEFAULT_BACKGROUND_COLOR};
    overflow-x: hidden;
  }

  #__next {
    flex: 1;
  }

  * {
    font-family: SeoulHangang, -apple-system, Noto SansSerif;
    white-space: pre-line;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
