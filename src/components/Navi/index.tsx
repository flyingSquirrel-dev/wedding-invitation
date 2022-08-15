import { Flex } from "components/Flex";
import { Spacing } from "components/Spacing";
import { KakaoNavi } from "./Kakao";
import { Tmap } from "./Tmap";
import { Naver } from "./Naver";

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
