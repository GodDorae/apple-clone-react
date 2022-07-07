import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { sceneInfo } from "../interface";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Section = styled.section< { height: string } >`
  height: ${(props) => props.height};
  padding-top: 50vh;
`;

const Title = styled.h1`
  position: relative;
  top: -10vh;
  z-index: 5;
  font-size: 4rem;
  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 9vw;
  }
`;

const MainMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 35vh;
  margin: 5px 0;
  height: 3em;
  font-size: 2.5rem;
  opacity: 0;

  @media screen and (min-width: 1024px) {
    font-size: 4vw;
  }

  & > p {
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
  }
`;

const MainMessageA = styled(MainMessage)<{ showScene: boolean }>`
  display: ${(props) => (props.showScene ? "block" : "none")};
  position: fixed;
  left: 0;
  width: 100%;
`;
const MainMessageB = styled(MainMessage)<{ showScene: boolean }>`
  display: ${(props) => (props.showScene ? "block" : "none")};
  position: fixed;
  left: 0;
  width: 100%;
`;
const MainMessageC = styled(MainMessage)<{ showScene: boolean }>`
  display: ${(props) => (props.showScene ? "block" : "none")};
  position: fixed;
  left: 0;
  width: 100%;
`;
const MainMessageD = styled(MainMessage)<{ showScene: boolean }>`
  display: ${(props) => (props.showScene ? "block" : "none")};
  position: fixed;
  left: 0;
  width: 100%;
`;

function Section0() {
  const sceneNumber = 0;
  const showScene: boolean = document.body.id === "show-scene-0";
  const scrollSection0 = useRef<HTMLElement>(null);
  const allSceneInfos = useRecoilValue(sceneInfo);
  const currentSceneInfo = allSceneInfos[sceneNumber];
  const [height, setHeight] = useState(`${currentSceneInfo.heightNum * window.innerHeight}px`);
  const scrollHeightHandler = useSetRecoilState(sceneInfo);
  function updateScrollHeight() {
    scrollHeightHandler((prev) => {
      const currentScene = prev[sceneNumber];
      currentScene.scrollHeight = currentScene.heightNum * window.innerHeight;
      const beforeCurrentScene = prev.slice(0, sceneNumber);
      const afterCurrentScene = prev.slice(sceneNumber + 1);
      const newArray = [...beforeCurrentScene, currentScene, ...afterCurrentScene];
      return newArray;
    })
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      setHeight(() => {
        return `${currentSceneInfo.heightNum * window.innerHeight}px`;
      });

      updateScrollHeight();
    });
  
    window.addEventListener("resize", () => {
      setHeight(() => {
        return `${currentSceneInfo.heightNum * window.innerHeight}px`;
      });

      updateScrollHeight();
    });
  }, []);

  return (
    <Section ref={scrollSection0} height={height}>
      <Title>Airmug Pro</Title>
      <MainMessageA className="section0-a" showScene={showScene}>
        <p>
          온전히 빠져들게 하는
          <br />
          최고급 세라믹
        </p>
      </MainMessageA>
      <MainMessageB className="section0-b" showScene={showScene}>
        <p>
          주변 맛을 느끼게 해주는
          <br />
          주변 맛 허용 모드
        </p>
      </MainMessageB>
      <MainMessageC className="section0-c" showScene={showScene}>
        <p>
          온종일 편안한
          <br />
          맞춤형 손잡이
        </p>
      </MainMessageC>
      <MainMessageD className="section0-d" showScene={showScene}>
        <p>
          새롭게 입가를
          <br />
          찾아온 매혹
        </p>
      </MainMessageD>
    </Section>
  );
}

export default Section0;
