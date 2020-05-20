import * as React from "react";
import { render } from "react-dom";
import { Chrome } from "./Components/Chrome";
import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const App: React.FC = () => {
  return (
    <>
    <Style />
    <Chrome />
    </>
  );
}

render(<App />, document.getElementById("app"));
