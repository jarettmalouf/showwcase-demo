import { Button, ColoredButton } from "../../1-helpers/buttons";
import { ButtonsWrapper, TextBox } from "../../1-helpers/content";

import { Education } from "../../1-helpers/interfaces";
import React from "react";
import styled from "@emotion/styled";

export function Entry({
  education,
  onEdit,
  onDelete,
}: {
  education: Education;
  onEdit: Function;
  onDelete: Function;
}) {
  const {
    degree,
    major,
    institution,
    startDate,
    endDate,
    description,
  } = education;

  return (
    <EducationEntry>
      <Title>{institution}</Title>
      <Date>
        {startDate.month} {startDate.year} – {endDate.month} {endDate.year}
      </Date>
      <DegreeInfo>
        {degree}, {major}
      </DegreeInfo>
      <Details>{description}</Details>

      {/* <EditButton onClick={onEdit} color="green">
        e
      </EditButton> */}
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </EducationEntry>
  );
}

const EducationEntry = styled(TextBox)`
  position: relative;
  background: grey;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px 0 0 15px;
`;

const DeleteButton = styled(Button)`
  position: absolute;
  margin: 0;
  top: 10px;
  right: 20px;
`;

const EditButton = styled(ColoredButton)``;

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
