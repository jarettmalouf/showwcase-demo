import {
  CenteredDiv,
  EntriesWrapper,
  SectionContainer,
  TextBox,
} from "../../1-helpers/content";

import { Education } from "../../1-helpers/interfaces";
import { EntryBox } from "../../1-helpers/content";
import React from "react";
import styled from "@emotion/styled";

export default function Sidebar({
  educationProfile,
}: {
  educationProfile: Education[];
}) {
  return (
    <Container>
      <EntriesWrapper>
        {educationProfile.map((edu) => (
          <EducationTitle>{edu.institution}</EducationTitle>
        ))}
      </EntriesWrapper>
    </Container>
  );
}

const Container = styled(SectionContainer)`
  flex: 1;
`;

const EducationTitle = styled(EntryBox)`
  max-width: 300px;
  height: auto;
  font-size: 16px;
`;
