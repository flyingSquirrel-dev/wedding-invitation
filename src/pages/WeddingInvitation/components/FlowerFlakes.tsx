import { css, keyframes } from "@emotion/react";
import FlowerFlake from "components/FlowerFlake";
import { useMount } from "hook/useMount";
import { useCallback } from "react";
import { range } from "utils/array/range";

export function FlowerFlakes() {
  const { isMounted } = useMount();

  const getRandomPosition = useCallback(
    () =>
      range(1, window.innerWidth)[
        Math.floor(Math.random() * window.innerWidth)
      ],
    []
  );

  const getRandomAnimationDelay = useCallback(() => {
    const rangeArray = range(0, 77);
    return rangeArray[Math.floor(Math.random() * rangeArray.length)];
  }, []);

  const getRandomScale = useCallback(() => {
    const rangeArray = range(4, 10);
    return rangeArray[Math.floor(Math.random() * rangeArray.length)] / 10;
  }, []);

  const getRandomDuration = useCallback(() => {
    const rangeArray = range(30, 120);
    return rangeArray[Math.floor(Math.random() * rangeArray.length)];
  }, []);

  const getRandomZindex = useCallback(() => {
    const rangeArray = range(-2, 10);
    return rangeArray[Math.floor(Math.random() * rangeArray.length)];
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      {range(1, 77).map((flower) => (
        <FlowerFlake
          key={`flower-flake-${flower}`}
          css={[
            baseFlowerFlakeStyle,
            { left: `${getRandomPosition()}px` },
            flowerFlakeAnimation(getRandomDuration()),
            { animationDelay: `${getRandomAnimationDelay()}s` },
            { scale: `${getRandomScale()}` },
            { zIndex: getRandomZindex() },
          ]}
        />
      ))}
    </div>
  );
}

const baseFlowerFlakeStyle = css`
  position: absolute;
  top: -35px;
`;

const flowerFlakeKeyFrames = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate3d(50px, 2450px, 0) rotate(1800deg);
    opacity: 0;
  }
`;

const flowerFlakeAnimation = (duration: number) => css`
  animation: ${flowerFlakeKeyFrames} ${duration}s ease-out infinite;
`;
