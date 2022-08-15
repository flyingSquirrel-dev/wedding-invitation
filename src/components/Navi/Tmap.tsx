import { ENV } from "constant/env";
import Image from "next/image";
import { useCallback } from "react";

const { SK_KEY, PLACE_NAME, PLACE_LAT, PLACE_LNG } = ENV;

export function Tmap() {
  const handler = useCallback(() => {
    location.href = `https://apis.openapi.sk.com/tmap/app/routes?appKey=${SK_KEY}&name=${PLACE_NAME}&lon=${PLACE_LNG}&lat=${PLACE_LAT}`;
  }, []);

  return (
    <>
      <Image
        src="/images/tmap.svg"
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
