import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { doActivateCreating, getNewEntry } from "./ducks/actions";

import { ColoredButton } from "../../1-helpers/buttons";
import React from "react";
import styled from "@emotion/styled";

export default function AddNewEducationButton() {
  const dispatch = useDispatch();

  return (
    <ButtonWrapper>
      <ColoredButton
        onClick={() => dispatch(doActivateCreating())}
        color="var(--dark-blue)"
      >
        Add new education
      </ColoredButton>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  max-width: 300px;
`;
