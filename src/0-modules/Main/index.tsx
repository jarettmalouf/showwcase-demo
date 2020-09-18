import {
  CenteredDiv,
  SectionContainer,
  TextBox,
} from "../../1-helpers/content";

import { ColoredButton } from "../../1-helpers/buttons";
import { Education } from "../../1-helpers/interfaces";
import { Entry as EducationEntry } from "./Entry";
import FullBar from "./FullBar";
import NewEducationModal from "../NewEducationModal";
import React from "react";
import Sidebar from "./Sidebar";
import styled from "@emotion/styled";

export default function Main() {
  const example: Education = {
    degree: "Bachelor's of Science",
    major: "Cognitive Science",
    startDate: { month: "August", year: "2018" },
    endDate: { month: "December", year: "2022" },
    institution: "Yale University",
    description: "• Hello \n • Hi \n • Yo",
  };
  const example2: Education = {
    degree: "Bachelor's of Science",
    major: "Cognitive Science",
    startDate: { month: "August", year: "2018" },
    endDate: { month: "December", year: "2022" },
    institution: "Harvard University",
    description: "• Hello \n • Hi \n • Yo",
  };
  return (
    <Container>
      <WelcomeText>Welcome to your education page</WelcomeText>
      <ButtonWrapper>
        <ColoredButton color="var(--dark-blue)">
          Add new education
        </ColoredButton>
      </ButtonWrapper>

      <Body>
        <Sidebar educationProfile={[example, example2]} />
        <FullBar educationProfile={[example, example2]} />
      </Body>
      <NewEducationModal />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > div {
    margin-top: 50px;
  }
`;

const WelcomeText = styled.h1`
  margin-top: 75px;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  background: black;
  > div:first-child {
    margin-right: 25px;
  }
`;

const ButtonWrapper = styled.div`
  max-width: 300px;
`;

const EntriesWrapper = styled.div`
  padding: 10px;
  background: #00ccff;
  border-radius: 10px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  > div:not(:first-child) {
    margin-top: 10px;
  }
`;
