import { Flex } from "components/Flex";
import { KakaoNavi } from "./Kakao";
import { Tmap } from "./Tmap";
import { Spacing } from "../Spacing";

export function Navi() {
  return (
    <Flex justify="center">
      <KakaoNavi />
      <Spacing size={0} css={{ width: "30px" }} />
      <Tmap />
    </Flex>
  );
}
