import { CenteredDiv, TextBox } from "../../1-helpers/content";
import React, { Component } from "react";

import { ColoredButton } from "../../1-helpers/buttons";
import styled from "@emotion/styled";

export default function Main() {
  return (
    <Container>
      <WelcomeText>Welcome to your education page</WelcomeText>
      <ButtonWrapper>
        {" "}
        <ColoredButton color="var(--dark-blue)">
          Add new education
        </ColoredButton>
      </ButtonWrapper>

      <Body>
        <Sidebar>
          <Entry>hi</Entry>
          <Entry>hi</Entry>
          <Entry>hi</Entry>
          <Entry>hi</Entry>
        </Sidebar>
        <FullBar>
          <Entry>hi</Entry>
          <Entry>hi</Entry>
          <Entry>hi</Entry>
          <Entry>hi</Entry>
        </FullBar>
      </Body>
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

const WelcomeText = styled(TextBox)`
  background: grey;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  background: black;
  > div:first-child {
    margin-right: 50px;
  }
`;

const ButtonWrapper = styled.div`
  max-width: 300px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: yellow;
  padding: 100px;
`;

const Sidebar = styled(Box)`
  flex: 1;
`;

const FullBar = styled(Box)`
  flex: 2;
`;

const Entry = styled(TextBox)``;
