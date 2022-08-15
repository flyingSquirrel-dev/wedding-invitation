import { Calendar } from "components/Calendar";
import { Flex } from "components/Flex";
import { LocationMap } from "components/LocationMap";
import { Navi } from "components/Navi";
import { Spacing } from "components/Spacing";
import Text from "components/Text";
import { ENV } from "constant/env";

const { TIME, PLACE_ADDRESS, PLACE_NAME, PLACE_LAT, PLACE_LNG } = ENV;

export function Location() {
  return (
    <>
      <Flex justify="center">
        <Flex direction="column" align="center" isWidth100={false}>
          <Text text="오시는 길" size={32} />
          <Spacing size={25} />
          <Flex direction="column">
            <Text text={`일시: ${TIME}`} />
            <Text text={`장소: ${PLACE_ADDRESS} ${PLACE_NAME}`} />
          </Flex>
        </Flex>
      </Flex>
      <Spacing size={80} />
      <Calendar />
      <Spacing size={80} />
      <LocationMap
        center={{
          lat: Number(PLACE_LAT),
          lng: Number(PLACE_LNG),
        }}
      />
      <Spacing size={50} />
      <Navi />
    </>
  );
}
