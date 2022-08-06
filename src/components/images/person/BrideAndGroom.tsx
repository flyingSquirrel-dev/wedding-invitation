import Image from "next/image";
import { Flex } from "components/Flex";

export function BrideAndGroom() {
  return (
    <Flex justify="center">
      <Image
        src="/images/wisdom-kangto.svg"
        alt=""
        layout="fixed"
        width="118.85"
        height="145"
        draggable={false}
      />
    </Flex>
  );
}
