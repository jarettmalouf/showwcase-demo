import "./App.css";

import React from "react";
import Root from "./0-modules/Root";
import logo from "./logo.svg";
import styled from "@emotion/styled";

export default function App() {
  return (
    <Container>
      <Root />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;
  background: var(--light-blue);
  justify-content: center;
`;
