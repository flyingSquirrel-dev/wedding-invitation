import styled from "@emotion/styled";
import Image from "next/image";
import { keyframes } from "@emotion/react";

export function FlowerWithStem6() {
  return (
    <Container>
      <Image
        src="/images/flowers-with-stem-6.svg"
        alt=""
        width="172"
        height="248"
        draggable={false}
      />
    </Container>
  );
}

const flowerMoving = keyframes`
  0%,
  100% {
    transform-origin: 40px 206px;
  }

  50% {
    transform: rotate(15deg);
  }
`;

const Container = styled.div`
  position: absolute;
  left: -25px;
  bottom: 100px;
  transform: rotate(20deg);
  animation: ${flowerMoving} 7s ease-in-out infinite;
`;
