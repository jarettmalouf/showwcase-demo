import {
  CenteredDiv,
  EntriesWrapper,
  SectionContainer,
  TextBox,
} from "../../1-helpers/content";
import { doActivateEditing, doDeleteEntry } from "./ducks/actions";

import { ColoredButton } from "../../1-helpers/buttons";
import { Education } from "../../1-helpers/interfaces";
import { Entry as EducationEntry } from "./Entry";
import React from "react";
import Sidebar from "./Sidebar";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";

export default function FullBar({
  educationProfile,
}: {
  educationProfile: Education[];
}) {
  const dispatch = useDispatch();
  return (
    <Container>
      <EntriesWrapper>
        {educationProfile.length > 0 ? (
          educationProfile.map((entry) => (
            <EducationEntry
              education={entry}
              onDelete={() => dispatch(doDeleteEntry(entry))}
              onEdit={() => dispatch(doActivateEditing(entry))}
            />
          ))
        ) : (
          <h2 style={{ textAlign: "center" }}>Enter your latest education!</h2>
        )}
      </EntriesWrapper>
    </Container>
  );
}

const Container = styled(SectionContainer)`
  flex: 5;
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
