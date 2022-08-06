import Text from "components/Text";
import { Flex } from "components/Flex";

export function Header() {
  return (
    <Flex justify="center" css={{ textAlign: "center" }}>
      <Text text={`저희 결혼식에\n초대합니다.`} size={24} />
    </Flex>
  );
}
