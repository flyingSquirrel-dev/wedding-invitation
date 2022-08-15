import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { ENV } from "constant/env";
import { width100 } from "utils/emotions/width";
import { MAX_WIDTH } from "constant/style";
import { margin } from "utils/emotions/margin";

const { KAKAO_KEY } = ENV;

interface Props {
  center: {
    lat: number;
    lng: number;
  };
}

export function LocationMap({ center }: Props) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapLoaded) return;

    kakao.maps.load(() => {
      if (mapRef.current) {
        const place = new kakao.maps.LatLng(center.lat, center.lng);

        const map = new kakao.maps.Map(mapRef.current, {
          center: place,
          level: 3,
        });

        const marker = new kakao.maps.Marker({
          position: place,
        });

        marker.setMap(map);

        const zoomControl = new kakao.maps.ZoomControl();

        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
      }
    });
  }, [mapLoaded, center]);

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false`}
        onLoad={() => setMapLoaded(true)}
      />
      <div
        id="map"
        ref={mapRef}
        css={[
          width100,
          { maxWidth: `${MAX_WIDTH}px`, height: "265px" },
          margin("0 auto"),
        ]}
      />
    </>
  );
}
