import { DAYS, OCTOBER } from "constant/calendar";
import { match } from "ts-pattern";

export function getDay(date: number): DAYS {
  const day = new Date(2022, OCTOBER, date).getDay();

  return match(day)
    .with(0, () => DAYS.일요일)
    .with(1, () => DAYS.월요일)
    .with(2, () => DAYS.화요일)
    .with(3, () => DAYS.수요일)
    .with(4, () => DAYS.목요일)
    .with(5, () => DAYS.금요일)
    .with(6, () => DAYS.토요일)
    .run();
}
