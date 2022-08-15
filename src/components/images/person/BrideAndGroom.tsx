import { Flex } from "components/Flex";
import Image from "next/image";

export function BrideAndGroom() {
  return (
    <Flex justify="center">
      <Image
        src="/images/wisdom-kangto.svg"
        alt=""
        layout="fixed"
        width="178"
        height="217"
        draggable={false}
      />
    </Flex>
  );
}
