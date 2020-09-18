import {
  CenteredDiv,
  SectionContainer,
  TextBox,
} from "../../1-helpers/content";
import { RootStateOrAny, useSelector } from "react-redux";

import AddNewEducationButton from "./AddNewEducationButton";
import { ColoredButton } from "../../1-helpers/buttons";
import { Education } from "../../1-helpers/interfaces";
import { Entry as EducationEntry } from "./Entry";
import FullBar from "./FullBar";
import NewEducationModal from "./NewEducationModal";
import React from "react";
import Sidebar from "./Sidebar";
import { exampleProfile } from "../../1-helpers/mockData";
import styled from "@emotion/styled";

export default function Main() {
  const name = useSelector((state: RootStateOrAny) => state.entries.name);
  const entries = useSelector((state: RootStateOrAny) => state.entries.entries);
  return (
    <>
      <Container>
        <WelcomeText>Welcome to {name}'s education page</WelcomeText>
        <AddNewEducationButton />
        <Body>
          <Sidebar educationProfile={entries} />
          <FullBar educationProfile={entries} />
        </Body>
      </Container>
      <NewEducationModal />
    </>
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
  > div:first-child {
    margin-right: 25px;
  }
`;
