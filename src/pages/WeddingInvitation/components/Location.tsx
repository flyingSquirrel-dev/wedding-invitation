import Text from "components/Text";
import { Spacing } from "components/Spacing";
import { Flex } from "components/Flex";
import { ENV } from "constant/env";

const { TIME, PLACE } = ENV;

export function Location() {
  return (
    <Flex justify="center">
      <Flex direction="column" justify="flex-start" isWidth100={false}>
        <Text text="오시는 길" size={32} />
        <Spacing size={25} />
        <Text text={`일시: ${TIME}`} />
        <Text text={`장소: ${PLACE}`} />
      </Flex>
    </Flex>
  );
}
