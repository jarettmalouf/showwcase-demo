import { CenteredDiv, TextBox } from "../../1-helpers/content";
import React, { Component } from "react";

import { ColoredButton } from "../../1-helpers/buttons";
import { Education } from "../../1-helpers/interfaces";
import NewEducationModal from "../NewEducationModal";
import styled from "@emotion/styled";

export function Entry({ education }: { education: Education }) {
  return (
    <EducationEntry>
      <Title>{education.institution}</Title>
      <Date>
        {education.startDate.month} {education.startDate.year} –{" "}
        {education.endDate.month} {education.endDate.year}
      </Date>
      <DegreeInfo>
        {education.degree}, {education.major}
      </DegreeInfo>
      <Details>{education.description}</Details>
    </EducationEntry>
  );
}

const EducationEntry = styled(TextBox)`
  background: grey;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px 0 0 15px;
`;

const Title = styled(TextBox)`
  font-weight: bold;
  font-size: 22px;
`;

const Date = styled(TextBox)`
  font-size: 18px;
`;

const DegreeInfo = styled(TextBox)`
  font-size: 16px;
  margin-top: -5px;
`;

const Details = styled.ul`
  margin-top: 0;
`;

const Detail = styled.li`
  font-size: 16px;
`;
