import { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import AppleClone from "./AppleClone";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;900&display=swap');
html {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
}
body {
  color: rgb(29, 29, 31);
  letter-spacing: -0.05em;
  background-color: white;
  overflow-x: hidden;
}
p {
  line-height: 1.6;
}
a {
  color: inherit;
  text-decoration: none;
}
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppleClone />
    </Fragment>
  )
}

export default App;
