import Image from "next/image";
import { useCallback } from "react";

import { ENV } from "constant/env";

const { NAVER_URL } = ENV;

export function Naver() {
  const handler = useCallback(() => {
    window.open(NAVER_URL);
  }, []);

  return (
    <>
      <Image
        src="/images/naver.svg"
        alt="길 안내하기 버튼"
        width={68}
        height={69}
        draggable={false}
        css={[{ borderRadius: "50%" }]}
        onClick={handler}
      />
    </>
  );
}
