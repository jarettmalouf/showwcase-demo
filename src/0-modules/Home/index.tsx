import {
  CenteredDiv,
  FormWrapper,
  Input,
  TextBox,
  TextInput,
} from "../../1-helpers/content";
import React, { Component, useState } from "react";

import { ColoredButton } from "../../1-helpers/buttons";
import { doUpdateName } from "../Main/ducks/actions";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";

export default function Home({ setSubmitted }: { setSubmitted: Function }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  return (
    <Container>
      <GreetingBox>Hi there! Welcome to your education Showwcase.</GreetingBox>
      <InputWrapper>
        <InstructionText>
          Type your name and hit Enter below to get started!
        </InstructionText>
        <FormWrapper>
          <TextInput
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter name here"
            autoComplete="none"
          />
        </FormWrapper>
        <ColoredButton color="var(--dark-blue)" onClick={handleSubmit}>
          Enter
        </ColoredButton>
      </InputWrapper>
    </Container>
  );

  function handleSubmit(e: any) {
    e.preventDefault();
    if (name.trim() === "") {
      return;
    }
    setName("");
    dispatch(doUpdateName(name));
    setSubmitted(true);
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-top: 150px;
  }
`;

const InputWrapper = styled(CenteredDiv)`
  > * {
    margin-top: 10px;
  }
`;

const GreetingBox = styled(TextBox)`
  text-align: center;
  font-size: 30px;
`;

const InstructionText = styled(TextBox)``;
