import styled from "styled-components";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Section0 from "./components/Section0";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import { useEffect } from "react";
import setLayout from "./functions/setLayout";

const Container = styled.div`
  overflow-x: hidden;
`;

function AppleClone() {
  setLayout();
  useEffect(() => {
    window.addEventListener("resize", setLayout);
  }, []);

  return (
    <Container>
      <Navigation />
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </Container>
  );
}

export default AppleClone;
