import Text from "components/Text";
import { Spacing } from "components/Spacing";
import { Flex } from "components/Flex";
import { LocationMap } from "components/LocationMap";
import { Navi } from "components/Navi";
import { ENV } from "constant/env";

const { TIME, PLACE_ADDRESS, PLACE_NAME, PLACE_LAT, PLACE_LNG } = ENV;

export function Location() {
  return (
    <Flex justify="center">
      <Flex direction="column" justify="flex-start" isWidth100={false}>
        <Text text="오시는 길" size={32} />
        <Spacing size={25} />
        <Text text={`일시: ${TIME}`} />
        <Text text={`장소: ${PLACE_ADDRESS} ${PLACE_NAME}`} />
        <Spacing size={25} />
        <LocationMap
          center={{
            lat: Number(PLACE_LAT),
            lng: Number(PLACE_LNG),
          }}
        />
        <Spacing size={25} />
        <Navi />
      </Flex>
    </Flex>
  );
}
