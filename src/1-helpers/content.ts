import * as React from "react";

import styled from "@emotion/styled";

export const colors = {
  LIGHT_GREY: "#D3D3D3",
  DARK_GREY: "#544F4E",
  BABY_BLUE: "#87ceeb",
  DARK_BLUE: "#0000FF",
};

export const StandardBox = styled.div`
  border-radius: 8px;
  border-color: ${colors.DARK_BLUE};
  border-width: 2px;
  background-color: white;
`;

export const Input = styled.input`
  display: block;
  outline: none;
  padding: 12px 12px;
  background: var(--black);
  color: var(--blue);
  font-family: var(--fonts);
  font-weight: bold;
  font-size: 24px;
  margin: 0;
  flex: 1;
  margin-right: 8px;
  border: 2px solid black;
  box-shadow: 3px 3px 3px #9e9e9e;
  color: black;
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextBox = styled.div`
  display: flex;
  // background: grey;
  height: 30px;
  max-width: 800px;
  font-size: 20px;
`;
