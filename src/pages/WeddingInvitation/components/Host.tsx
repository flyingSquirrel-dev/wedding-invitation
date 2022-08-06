import { Flex } from "components/Flex";
import Text from "components/Text";
import { margin } from "utils/emotions/margin";
import { ENV } from "constant/env";

const {
  FATHER_OF_THE_GROOM,
  MOTHER_OF_THE_GROOM,
  GROOM,
  FATHER_OF_THE_BRIDE,
  MOTHER_OF_THE_BRIDE,
  BRIDE,
} = ENV;

export function Host() {
  return (
    <>
      <Flex justify="center">
        <Text text={`${FATHER_OF_THE_GROOM}  ${MOTHER_OF_THE_GROOM}`} />
        <Text text="의 장남" size={12} />
        <Text text={GROOM} css={margin.left(6)} />
      </Flex>
      <Flex justify="center">
        <Text text={`${FATHER_OF_THE_BRIDE}  ${MOTHER_OF_THE_BRIDE}`} />
        <Text text="의 장녀" size={12} />
        <Text text={BRIDE} css={margin.left(6)} />
      </Flex>
    </>
  );
}
