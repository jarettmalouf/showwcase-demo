import React from "react";
import { TextBox } from "../1-helpers/content";
import styled from "@emotion/styled";

export default function Picker({
  value,
  choices,
  onChange,
}: {
  value: any;
  choices: any[];
  onChange: Function;
}) {
  return (
    <SelectionInput
      name={String(value)}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={String(value)}
    >
      {choices.map((choice) => (
        <Option value={choice}>{choice}</Option>
      ))}
    </SelectionInput>
  );
}

const SelectionInput = styled.select`
  margin: 0 auto;
  outline: none;
  padding: 8px 12px;
  border-radius: 20px;
  color: var(--light-grey);
  font-weight: bold;
  font-size: 20px;
  color: white;
  width: 100%;
  background: transparent;
  border: 2px solid white;
`;

const Option = styled.option`
  background: var(--black);
  color: white;
  font-family: var(--fonts);
  font-weight: bold;
  font-size: 24px;
  font-size: 24px;
`;
