import { ColoredButton } from "../../1-helpers/buttons";
import React from "react";
import styled from "@emotion/styled";

export default function AddNewEducationButton() {
  return (
    <ButtonWrapper>
      <ColoredButton color="var(--dark-blue)">Add new education</ColoredButton>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  max-width: 300px;
`;
