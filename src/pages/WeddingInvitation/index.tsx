import { Spacing } from "components/Spacing";
import styled from "@emotion/styled";
import { FlowerWithSteam1 } from "components/images/flowers/FlowerWithSteam1";
import { FlowerWithSteam2 } from "components/images/flowers/FlowerWithSteam2";
import { BrideAndGroom } from "components/images/person/BrideAndGroom";
import { Header } from "./components/Header";
import { Host } from "./components/Host";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { Location } from "./components/Location";
import { FlowerWithSteam4 } from "components/images/flowers/FlowerWithSteam4";
import { FlowerWithSteam3 } from "components/images/flowers/FlowerWithSteam3";

// TODO: import sort 적용해놓기

export default function WeddingInvitation() {
  return (
    <Container>
      <FlowerWithSteam1 />
      <FlowerWithSteam2 />
      <Spacing size={100} />
      <Header />
      <Spacing size={56} />
      <Host />
      <Spacing size={80} />
      <BrideAndGroom />
      <Spacing size={200} />
      <FlowerWithSteam3 />
      <FlowerWithSteam4 />
      <WelcomeMessage />
      <Spacing size={200} />
      <Location />
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
