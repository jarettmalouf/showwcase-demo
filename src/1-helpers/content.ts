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
  outline: none;
  padding: 12px 12px;
  background: var(--black);
  color: var(--blue);
  font-weight: bold;
  font-size: 24px;
  margin: 0;
  flex: 1;
  margin-right: 8px;
  border: 2px solid black;
  box-shadow: 3px 3px 3px #9e9e9e;
  color: black;
`;

export const TextInput = styled(Input)`
  margin: 0 auto;
  padding: 8px 12px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  font-size: 20px;
  color: white;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: yellow;
  max-height: 400px;
  padding: 50px;
  > div {
    margin-top: 10px;
  }
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
  max-width: 1000px;
  font-size: 20px;
`;

export const EntryBox = styled(TextBox)`
  background: grey;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const EntriesWrapper = styled.div`
  padding: 10px;
  background: #00ccff;
  border-radius: 10px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  > div:not(:first-child) {
    margin-top: 10px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`;

export const SpacedColumn = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin: 10px;
  }
`;

export const SpacedRow = styled.div`
  display: flex;
  > * {
    margin: 2px 10px;
  }
`;
