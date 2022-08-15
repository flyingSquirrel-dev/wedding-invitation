import Script from "next/script";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ENV } from "constant/env";

const { KAKAO_KEY, PLACE_NAME, PLACE_LAT, PLACE_LNG } = ENV;

export function KakaoNavi() {
  const [kakaoLoaded, setKakaoLoaded] = useState(false);

  const naviHandler = useCallback(() => {
    if (PLACE_NAME && PLACE_LAT && PLACE_LNG) {
      Kakao.Navi.start({
        name: PLACE_NAME,
        x: Number(PLACE_LNG ?? ""),
        y: Number(PLACE_LAT ?? ""),
        coordType: "wgs84",
      });
    }
  }, []);

  useEffect(() => {
    if (kakaoLoaded) {
      Kakao.init(KAKAO_KEY ?? "");
    }

    return () => {
      if (kakaoLoaded) Kakao.cleanup();
    };
  }, [kakaoLoaded]);

  return (
    <>
      <Script
        src="//developers.kakao.com/sdk/js/kakao.js"
        onLoad={() => setKakaoLoaded(true)}
      />

      <Image
        src="/images/kakao-navi.svg"
        alt="길 안내하기 버튼"
        width={68}
        height={69}
        draggable={false}
        onClick={naviHandler}
        css={[{ borderRadius: "50%" }]}
      />
    </>
  );
}
