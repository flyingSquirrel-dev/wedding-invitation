import Text from "components/Text";
import { Spacing } from "components/Spacing";
import { Flex } from "components/Flex";
import { LocationMap } from "components/LocationMap";
import { Navi } from "components/Navi";
import { ENV } from "constant/env";
import { Calendar } from "components/Calendar";

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
      <Spacing size={50} />
      <Calendar />
      <Spacing size={50} />
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
