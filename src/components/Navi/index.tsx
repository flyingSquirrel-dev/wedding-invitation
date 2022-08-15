import { Flex } from "components/Flex";
import { KakaoNavi } from "./Kakao";
import { Tmap } from "./Tmap";

export function Navi() {
  return (
    <Flex justify="space-around">
      <KakaoNavi />
      <Tmap />
    </Flex>
  );
}
