import styled from "@emotion/styled";
import Image from "next/image";
import { keyframes } from "@emotion/react";

export function FlowerWithStem2() {
  return (
    <Container>
      <Image
        src="/images/flowers-with-stem-2.svg"
        alt=""
        width="100"
        height="207"
        draggable={false}
      />
    </Container>
  );
}

const flowerMoving = keyframes`
  0%,
  100% {
    transform-origin: 32px 210px;
  }

  50% {
    transform: rotate(30deg);
  }
`;

const Container = styled.div`
  position: absolute;
  left: -45px;
  top: 0;
  transform: rotate(27.11deg);
  animation: ${flowerMoving} 5s ease-in-out infinite;
  z-index: -1;
`;
