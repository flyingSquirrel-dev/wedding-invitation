import { css } from "@emotion/react";

export const DEFAULT_FONT_SIZE = 16;
export const BOLD_FONT_WEIGHT = 600;
const DEFAULT_BACKGROUND_COLOR = "#F4F4F4";

export const globalStyle = css`
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
    background-color: ${DEFAULT_BACKGROUND_COLOR};
  }

  * {
    font-family: SeoulHangang, -apple-system, Noto SansSerif;
    white-space: pre-line;
  }
`;
