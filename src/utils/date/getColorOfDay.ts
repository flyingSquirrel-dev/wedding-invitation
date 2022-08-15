import { DAYS } from "constant/calendar";
import { match } from "ts-pattern";
import { colors } from "constant/colors";

export function getColorOfDay(day: DAYS) {
  return match(day)
    .with(DAYS.일요일, () => ({ color: colors.red }))
    .with(DAYS.토요일, () => ({ color: colors.blue }))
    .otherwise(() => undefined);
}
