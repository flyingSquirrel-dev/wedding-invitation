import { Flex } from "components/Flex";
import { Spacing } from "components/Spacing";

import { KakaoNavi } from "./Kakao";
import { Naver } from "./Naver";
import { Tmap } from "./Tmap";

export function Navi() {
  return (
    <Flex justify="center">
      <KakaoNavi />
      <Spacing size={0} css={{ width: "30px" }} />
      <Tmap />
      <Spacing size={0} css={{ width: "30px" }} />
      <Naver />
    </Flex>
  );
}
