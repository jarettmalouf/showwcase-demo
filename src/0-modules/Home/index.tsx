import { CenteredDiv, Input, TextBox } from "../../1-helpers/content";
import React, { Component, useState } from "react";

import { ColoredButton } from "../../1-helpers/buttons";
import styled from "@emotion/styled";

export default function Home({ setSubmitted }: { setSubmitted: Function }) {
  const [name, setName] = useState("");

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
    // submitNewProfile({name});
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

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`;

const TextInput = styled(Input)`
  margin: 0 auto;
  padding: 8px 12px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  font-size: 20px;
`;

// const;