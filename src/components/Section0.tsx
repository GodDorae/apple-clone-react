import styled, { css } from "styled-components";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  ISceneInfo,
  ISceneInfo0,
  ISceneInfo2,
  ISceneInfo3,
  sceneInfo,
} from "../interface";
import { useRecoilState } from "recoil";

const Section = styled.section<{ height: string }>`
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

const Canvas = styled.div<{ showScene: string }>`
  display: ${(props) => props.showScene === "show-scene-0" ? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  & > canvas {
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

const MainMessageA = styled(MainMessage)<{ showScene: string }>`
  display: ${(props) => props.showScene === "show-scene-0" ? "block" : "none"};
  position: fixed;
  left: 0;
  width: 100%;
`;
const MainMessageB = styled(MainMessage)<{ showScene: string }>`
  display: ${(props) => props.showScene === "show-scene-0" ? "block" : "none"};
  position: fixed;
  left: 0;
  width: 100%;
`;
const MainMessageC = styled(MainMessage)<{ showScene: string }>`
  display: ${(props) => props.showScene === "show-scene-0" ? "block" : "none"};
  position: fixed;
  left: 0;
  width: 100%;
`;
const MainMessageD = styled(MainMessage)<{ showScene: string }>`
  display: ${(props) => props.showScene === "show-scene-0" ? "block" : "none"};
  position: fixed;
  left: 0;
  width: 100%;
`;

function Section0() {
  const sceneNumber = 0;
  const scrollSection0 = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [allSceneInfos, setSceneInfos] = useRecoilState(sceneInfo);
  const currentSceneInfo = allSceneInfos[sceneNumber];
  const [height, setHeight] = useState(
    `${currentSceneInfo.heightNum * window.innerHeight}px`
  );

  const setDOM = useCallback(() => {
    setSceneInfos((prev) => {
      const containerElementID = `scroll-section-${sceneNumber}`;
      const containerElement = {
        container: document.getElementById(containerElementID),
      };
      const messageObj = {
        messageA: document.querySelector(".section0-a"),
        messageB: document.querySelector(".section0-b"),
        messageC: document.querySelector(".section0-c"),
        messageD: document.querySelector(".section0-d"),
        canvas: canvasRef.current,
        context: canvasRef.current?.getContext("2d"),
      };
      const originalObj = { ...prev[sceneNumber].objs };
      const updatedObj = { ...originalObj, ...containerElement, ...messageObj };
      const updatedSceneInfo = { ...prev[sceneNumber], objs: updatedObj };
      const before = prev.slice(0, sceneNumber);
      const after = prev.slice(sceneNumber + 1);
      const newArray = [...before, updatedSceneInfo, ...after];
      return newArray as [ISceneInfo0, ISceneInfo, ISceneInfo2, ISceneInfo3];
    });
  }, [allSceneInfos[sceneNumber].objs]);

  function setLayout() {
    if (allSceneInfos[sceneNumber].type === "sticky") {
      setSceneInfos((prev) => {
        const newScrollHeight = {
          scrollHeight: currentSceneInfo.heightNum * window.innerHeight,
        };
        const updatedSceneInfo = { ...prev[sceneNumber], ...newScrollHeight };
        const before = prev.slice(0, sceneNumber);
        const after = prev.slice(sceneNumber + 1);
        const newArray = [...before, updatedSceneInfo, ...after];
        return newArray as [ISceneInfo0, ISceneInfo, ISceneInfo2, ISceneInfo3];
      });

      const heightRatio = window.innerHeight / 1080;
      if (allSceneInfos[sceneNumber].objs.canvas) {
        allSceneInfos[
          sceneNumber
        ].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
      }
    } else if (allSceneInfos[sceneNumber].type === "normal") {
      setSceneInfos((prev) => {
        const offsetHeight = currentSceneInfo.objs.container
          ? currentSceneInfo.objs.container.offsetHeight
          : 0;
        const newScrollHeight = { scrollHeight: offsetHeight };
        const updatedSceneInfo = { ...prev[sceneNumber], ...newScrollHeight };
        const before = prev.slice(0, sceneNumber);
        const after = prev.slice(sceneNumber + 1);
        const newArray = [...before, updatedSceneInfo, ...after];
        return newArray as [ISceneInfo0, ISceneInfo, ISceneInfo2, ISceneInfo3];
      });
    }
  }

  useEffect(() => {
    if (document.readyState === "complete") {
      setHeight(() => {
        return `${currentSceneInfo.heightNum * window.innerHeight}px`;
      });

      setDOM();
    }

    window.addEventListener("resize", () => {
      setHeight(() => {
        return `${currentSceneInfo.heightNum * window.innerHeight}px`;
      });

      setDOM();
    });
  }, []);

  useEffect(() => {
    setLayout();
  }, [setDOM]);

  return (
    <Section ref={scrollSection0} height={height} id="scroll-section-0">
      <Title>Airmug Pro</Title>
      <Canvas showScene={document.body.id}>
        <canvas
          id="video-canvas-0"
          ref={canvasRef}
          width="1920"
          height="1080"
        ></canvas>
      </Canvas>
      <MainMessageA showScene={document.body.id} className="section0-a">
        <p>
          온전히 빠져들게 하는
          <br />
          최고급 세라믹
        </p>
      </MainMessageA>
      <MainMessageB showScene={document.body.id} className="section0-b">
        <p>
          주변 맛을 느끼게 해주는
          <br />
          주변 맛 허용 모드
        </p>
      </MainMessageB>
      <MainMessageC showScene={document.body.id} className="section0-c">
        <p>
          온종일 편안한
          <br />
          맞춤형 손잡이
        </p>
      </MainMessageC>
      <MainMessageD showScene={document.body.id} className="section0-d">
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
