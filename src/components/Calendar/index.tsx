import styled from "@emotion/styled";
import { range } from "utils/array/range";
import { colors } from "constant/colors";
import { DAYS, EVENT_DATE, HOLIDAYS_OF_OCTOBER } from "constant/calendar";
import { getDay } from "utils/date/getDay";
import { getColorOfDay } from "utils/date/getColorOfDay";
import { css } from "@emotion/react";
import { MAX_WIDTH } from "constant/style";

const OCTOBER_DATES = range(1, 31).map((date) => ({
  date,
  isFirstDate: date === 1,
  isHoliday: HOLIDAYS_OF_OCTOBER.includes(date),
  isWeddingDate: date === EVENT_DATE,
  day: getDay(date),
}));

export function Calendar() {
  return (
    <Container>
      {Object.values(DAYS).map((day) => (
        <div key={day} css={getColorOfDay(day)}>
          {day}
        </div>
      ))}
      {OCTOBER_DATES.map(
        ({ date, isFirstDate, isHoliday, isWeddingDate, day }) => (
          <div
            key={date}
            css={[
              isFirstDate && { gridColumn: 7 },
              getColorOfDay(day),
              isHoliday && { color: colors.red },
              isWeddingDate && weddingDateStyle,
            ]}
          >
            {date}
          </div>
        )
      )}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;
  grid-template-rows: repeat(6, 25px);
  align-items: center;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 10px;
  text-align: center;
`;

const weddingDateStyle = css`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    border: 1.5px solid ${colors.pink};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: ${colors.pink}2a;
  }
`;
