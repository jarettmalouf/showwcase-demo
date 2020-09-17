import { CenteredDiv, TextBox } from "../../1-helpers/content";
import React, { Component } from "react";

import { ColoredButton } from "../../1-helpers/buttons";
import styled from "@emotion/styled";

export default function Main() {
  return (
    <Container>
      <WelcomeText>Welcome to your education page</WelcomeText>
      <ButtonWrapper>
        <ColoredButton color="var(--dark-blue)">
          Add new education
        </ColoredButton>
      </ButtonWrapper>

      <Body>
        <Sidebar>
          <EntriesWrapper>
            <EducationTitle>American University of Paris</EducationTitle>
            <EducationTitle>hi</EducationTitle>
            <EducationTitle>hi</EducationTitle>
            <EducationTitle>hi</EducationTitle>
          </EntriesWrapper>
        </Sidebar>
        <FullBar>
          <EntriesWrapper>
            <EducationEntry>
              <Title>American University of Paris</Title>
              <Date>August 2018 - May 2022</Date>
              <Details>
                <Detail>this information</Detail>
                <Detail>this information</Detail>
                <Detail>this information</Detail>
              </Details>
            </EducationEntry>
            <EducationEntry>
              <Title>American University of Paris</Title>
              <Date>August 2018 - May 2022</Date>
              <Details>
                <Detail>this information</Detail>
                <Detail>this information</Detail>
                <Detail>this information</Detail>
              </Details>
            </EducationEntry>
            <EducationEntry>
              <Title>American University of Paris</Title>
              <Date>August 2018 - May 2022</Date>
              <Details>
                <Detail>this information</Detail>
                <Detail>this information</Detail>
                <Detail>this information</Detail>
              </Details>
            </EducationEntry>
            <EducationEntry>
              <Title>American University of Paris</Title>
              <Date>August 2018 - May 2022</Date>
              <Details>
                <Detail>this information</Detail>
                <Detail>this information</Detail>
                <Detail>this information</Detail>
              </Details>
            </EducationEntry>
          </EntriesWrapper>
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

const WelcomeText = styled.h1`
  margin-top: 75px;
  background: grey;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  background: black;
  > div:first-child {
    margin-right: 50px;
  }
`;

const ButtonWrapper = styled.div`
  max-width: 300px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: yellow;
  max-height: 400px;
  padding: 50px;
  > div {
    margin-top: 10px;
  }
`;

const Sidebar = styled(SectionContainer)`
  flex: 1;
`;

const EntriesWrapper = styled.div`
  padding: 10px;
  background: grey;
  border-radius: 10px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  > div:first-child {
    font-weight: bold;
  }
  > div:not(:first-child) {
    margin-top: 10px;
  }
`;

const FullBar = styled(SectionContainer)`
  flex: 5;
`;

const Entry = styled(TextBox)`
  background: grey;
  padding: 10px;
  background: blue;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const EducationTitle = styled(Entry)`
  max-width: 300px;
  height: auto;
  font-size: 16px;
`;

const EducationEntry = styled(Entry)`
  padding: 15px 0 0 15px;
`;

const Title = styled(TextBox)`
  font-weight: bold;
  font-size: 22px;
`;

const Date = styled(TextBox)`
  font-size: 18px;
`;

const Details = styled.ul`
  margin-top: 0;
`;

const Detail = styled.li`
  font-size: 16px;
`;
