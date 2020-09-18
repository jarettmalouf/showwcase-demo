import "./App.css";

import { applyMiddleware, createStore } from "redux";

import { Provider } from "react-redux";
import React from "react";
import Root from "./0-modules/Root/index";
import logo from "./logo.svg";
import rootReducer from "./0-modules/Root/ducks/reducer";
import styled from "@emotion/styled";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <Root />
      </Container>
    </Provider>
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
