import styled from "styled-components";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Section0 from "./components/Section0";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import { prevScrollHeight, yOffset, initialSceneInfo, sceneInfo } from "./interface";
import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect } from "react";


const Container = styled.div`
  overflow-x: hidden;
`;

function AppleClone() {
  const sceneInfoAtomValue = useRecoilValue(sceneInfo);
  const allSceneInfos = useRecoilValue(initialSceneInfo);
  const [prevScrollHeightValue, setPrevScrollHeightValue] = useRecoilState(prevScrollHeight);
  const [yOffsetValue, setYOffsetValue] = useRecoilState(yOffset);

  function scrollLoop() {
    for (let i = 0; i < allSceneInfos.length; i++ ) {
      setPrevScrollHeightValue((prev) => {
        return prev += allSceneInfos[i].scrollHeight;
      });
    }
  }

  useEffect(() => {
    if (prevScrollHeightValue !== 0) {
      console.log(prevScrollHeightValue);
    }
  }, [prevScrollHeightValue]);

  useEffect(() => {
    if (sceneInfoAtomValue[1].scrollHeight) {
      console.log(allSceneInfos);
      window.addEventListener("scroll", scrollLoop);
    }
  }, [sceneInfoAtomValue]);

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
