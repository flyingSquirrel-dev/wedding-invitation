import styled from "@emotion/styled";
import { FlowerWithStem1 } from "components/images/flowers/FlowerWithStem1";
import { FlowerWithStem2 } from "components/images/flowers/FlowerWithStem2";
import { FlowerWithStem3 } from "components/images/flowers/FlowerWithStem3";
import { FlowerWithStem4 } from "components/images/flowers/FlowerWithStem4";
import { FlowerWithStem5 } from "components/images/flowers/FlowerWithStem5";
import { FlowerWithStem6 } from "components/images/flowers/FlowerWithStem6";
import { MacBook } from "components/images/misc/MacBook";
import { BrideAndGroom } from "components/images/person/BrideAndGroom";
import { Spacing } from "components/Spacing";

import { FlowerFlakes } from "./components/FlowerFlakes";
import { Header } from "./components/Header";
import { Host } from "./components/Host";
import { Location } from "./components/Location";
import { WelcomeMessage } from "./components/WelcomeMessage";

export default function WeddingInvitation() {
  return (
    <Container>
      <FlowerFlakes />
      <FlowerWithStem1 />
      <FlowerWithStem2 />
      <Spacing size={100} />
      <Header />
      <Spacing size={56} />
      <Host />
      <Spacing size={80} />
      <BrideAndGroom />
      <Spacing size={200} />
      <FlowerWithStem3 />
      <FlowerWithStem4 />
      <WelcomeMessage />
      <Spacing size={200} />
      <Location />
      <Spacing size={200} />
      <MacBook />
      <FlowerWithStem5 />
      <FlowerWithStem6 />
      <Spacing size={150} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
`;
