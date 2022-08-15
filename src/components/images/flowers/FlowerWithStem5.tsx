import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

export function FlowerWithStem5() {
  return (
    <Container>
      <Image
        src="/images/flowers-with-stem-5.svg"
        alt=""
        width="113"
        height="228"
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
  bottom: 120px;
  transform: rotate(20deg);
  animation: ${flowerMoving} 7s ease-in-out infinite;
`;
