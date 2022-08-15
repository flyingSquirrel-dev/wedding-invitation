import Text from "components/Text";
import { Spacing } from "components/Spacing";
import { Flex } from "components/Flex";

export function WelcomeMessage() {
  return (
    <Flex justify="center">
      <Flex direction="column" align="center" isWidth100={false}>
        <Text text="모시는 말씀" size={32} />
        <Spacing size={25} />
        <Text
          text={`저희 두 사람이 소중한 분들을 모시고\n결혼식을 올리고자 합니다.\n\n오셔서 축복해주시면\n감사한 마음으로 기쁠 때나 슬플 때나\n서로 아끼고 사랑하며 잘 살겠습니다.`}
        />
      </Flex>
    </Flex>
  );
}
