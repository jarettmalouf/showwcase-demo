import React, { useState } from "react";

import Home from "../Home";
import Main from "../Main";
import styled from "@emotion/styled";

export default function Root() {
  const [submitted, setSubmitted] = useState(false);
  // if (!submitted) {
  //   return <Home setSubmitted={setSubmitted} />;
  // }
  return <Main />;
}
