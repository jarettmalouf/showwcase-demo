import {
  CenteredDiv,
  SectionContainer,
  TextBox,
} from "../../1-helpers/content";

import AddNewEducationButton from "./AddNewEducationButton";
import { ColoredButton } from "../../1-helpers/buttons";
import { Education } from "../../1-helpers/interfaces";
import { Entry as EducationEntry } from "./Entry";
import FullBar from "./FullBar";
import NewEducationModal from "../NewEducationModal";
import React from "react";
import Sidebar from "./Sidebar";
import { exampleProfile } from "../../1-helpers/mockData";
import styled from "@emotion/styled";

export default function Main() {
  return (
    <Container>
      <WelcomeText>Welcome to your education page</WelcomeText>
      <AddNewEducationButton />
      <Body>
        <Sidebar educationProfile={exampleProfile} />
        <FullBar educationProfile={exampleProfile} />
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
