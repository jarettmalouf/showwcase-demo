import React, { Component, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./Home";
import Main from "./Main";
import styled from "@emotion/styled";

export default function Root() {
  const [submitted, setSubmitted] = useState(false);
  // if (!submitted) {
  //   return <Home setSubmitted={setSubmitted} />;
  // }
  return <Main />;

  /* <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router> */
}
