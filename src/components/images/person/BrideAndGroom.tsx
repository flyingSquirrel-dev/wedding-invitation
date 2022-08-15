import { Flex } from "components/Flex";
import Image from "next/image";

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
