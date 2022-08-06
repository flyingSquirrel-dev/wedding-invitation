import styled from "@emotion/styled";
import Image from "next/image";
import { keyframes } from "@emotion/react";

export function FlowerWithSteam1() {
  return (
    <Container>
      <Image
        src="/images/flowers-with-stem-1.svg"
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
    transform-origin: 75px 229px;
  }

  50% {
    transform: rotate(25deg);
  }
`;

const Container = styled.div`
  position: absolute;
  left: -60px;
  top: 0;
  transform: rotate(18.71deg);
  animation: ${flowerMoving} 10s ease infinite;
  overflow: hidden;
`;
