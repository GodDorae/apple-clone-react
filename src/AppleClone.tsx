import styled from "styled-components";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Section0 from "./components/Section0";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import { scrollInfo, initialSceneInfo, sceneInfo } from "./interface";
import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect } from "react";


const Container = styled.div`
  overflow-x: hidden;
`;

function AppleClone() {
  const sceneInfoAtomValue = useRecoilValue(sceneInfo);
  const allSceneInfos = useRecoilValue(initialSceneInfo);
  const [scrollInfoValue, setScrollInfoValue] = useRecoilState(scrollInfo);

  function scrollLoop() {
    setScrollInfoValue((prev) => {
      const yOffsetValue = window.scrollY;
      let tempCurrentScene = prev.currentScene;
      let tempPrev = 0;
      for (let i = 0; i < tempCurrentScene; i++) {
        tempPrev += allSceneInfos[i].scrollHeight;
      };
      if (yOffsetValue > tempPrev + allSceneInfos[tempCurrentScene].scrollHeight) {
        tempCurrentScene++;
      }

      if (yOffsetValue < tempPrev) {
        if (tempCurrentScene === 0) return prev;
        tempCurrentScene--;
      }

      document.body.setAttribute('id', `show-scene-${tempCurrentScene}`)

      const newArray = { currentScene: tempCurrentScene, prevScrollHeight: tempPrev };

      return newArray;
    })
  }

  useEffect(() => {
    if (sceneInfoAtomValue[1].scrollHeight) {
      window.addEventListener("scroll", scrollLoop);
    }
  }, [window.scrollY, sceneInfoAtomValue]);

  useEffect(() => {
    console.log(scrollInfoValue.currentScene, document.body.id);
}, [scrollInfoValue]);

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
