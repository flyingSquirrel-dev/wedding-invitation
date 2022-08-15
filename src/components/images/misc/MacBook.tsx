import { Flex } from "components/Flex";
import Image from "next/image";

export function MacBook() {
  return (
    <Flex justify="center">
      <Flex justify="center">
        <Image
          src="/images/macbook-pro.svg"
          alt=""
          width={131}
          height={135}
          draggable={false}
        />
      </Flex>
    </Flex>
  );
}
