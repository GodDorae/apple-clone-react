import styled from "styled-components";
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

const MainMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 35vh;
  margin: 5px 0;
  height: 3em;
  font-size: 3.5rem;
  opacity: 0;

  @media screen and (min-width: 1024px) {
    font-size: 6vw;
  }

  & > p {
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
  }

  & > small {
    display: block;
    margin-bottom: 0.5em;
    font-size: 1rem;

    @media screen and (min-width: 1024px) {
      font-size: 1.5vw;
    }
  }
`;

const Canvas = styled.div<{ showScene: string }>`
  display: ${(props) => props.showScene === "show-scene-2" ? "block" : "none"};
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

const DescMessage = styled.div`
  opacity: 0;
  font-weight: bold;
  width: 50%;

  @media screen and (min-width: 1024px) {
    width: 20%;
  }
`;

const Pin = styled.div`
  width: 1px;
  height: 100px;
  background-color: rgb(29, 29, 31);
`;

const MessageA = styled(MainMessage)<{ showScene: string }>`
  display: ${(props) => props.showScene === "show-scene-2" ? "block" : "none"};
  position: fixed;
  left: 0;
  width: 100%;
`;
const MessageB = styled(DescMessage)<{ showScene: string }>`
  display: ${(props) => props.showScene === "show-scene-2" ? "block" : "none"};
  position: fixed;
  width: 100%;
  top: 10%;
  left: 40%;

  @media screen and (min-width: 1024px) {
    top: 20%;
    left: 53%;
  }
`;
const MessageC = styled(DescMessage)<{ showScene: string }>`
  display: ${(props) => props.showScene === "show-scene-2" ? "block" : "none"};
  position: fixed;
  width: 100%;
  top: 15%;
  left: 45%;

  @media screen and (min-width: 1024px) {
    left: 55%;
  }
`;

function Section2() {
  const sceneNumber = 2;
  const scrollSection2 = useRef<HTMLElement>(null);
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
        messageA: document.querySelector(".section2-a"),
        messageB: document.querySelector(".section2-b"),
        messageC: document.querySelector(".section2-c"),
        pinB: document.querySelector(".section2-b-pin"),
        pinC: document.querySelector(".section2-c-pin"),
        canvas: canvasRef.current,
        context: canvasRef.current?.getContext("2d"),
      };
      const originalObj = { ...prev[sceneNumber].objs }
      const updatedObj = {  ...originalObj, ...containerElement, ...messageObj };
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
        allSceneInfos[sceneNumber].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
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
    <Section ref={scrollSection2} height={height} id="scroll-section-2">
      <Canvas showScene={document.body.id}>
        <canvas
          id="video-canvas-0"
          ref={canvasRef}
          width="1920"
          height="1080"
        ></canvas>
      </Canvas>
      <MessageA showScene={document.body.id} className="section2-a">
        <p>
          <small>편안한 촉감</small> <br/>
          입과 하나 되다
        </p>
      </MessageA>
      <MessageB showScene={document.body.id} className="section2-b">
        <p>
          편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, <br />
          우리는 이를 하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운
          수준의 머그, <br />
          Airmug Pro를 만들었습니다. <br /> 입에 뭔가 댔다는 감각은 어디새
          사라지고 <br />
          오롯이 당신과 음료만 남게 되죠.
        </p>
        <Pin className="section2-b-pin" />
      </MessageB>
      <MessageC showScene={document.body.id} className="section2-c">
        <p>
          Design and quality of Sweden,
          <br />
          Made in China
        </p>
        <Pin className="section2-c-pin" />
      </MessageC>
    </Section>
  );
}

export default Section2;
