import styled from "@emotion/styled";
import Image from "next/image";
import { keyframes } from "@emotion/react";

export function FlowerWithStem3() {
  return (
    <Container>
      <Image
        src="/images/flowers-with-stem-3.svg"
        alt=""
        width="67.53"
        height="205.7"
        draggable={false}
      />
    </Container>
  );
}

const flowerMoving = keyframes`
  0%,
  100% {
    transform-origin: 50px 205px;
  }

  50% {
    transform: rotate(-10deg);
  }
`;

const Container = styled.div`
  position: absolute;
  right: -20px;
  top: 685.97px;
  transform: rotate(-24deg);
  animation: ${flowerMoving} 10s ease-in-out infinite;
  z-index: -1;
`;
