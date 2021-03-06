import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import {
  ISceneInfo,
  ISceneInfo0,
  ISceneInfo2,
  ISceneInfo3,
  sceneInfo,
} from "../interface";
import { useRecoilState } from "recoil";

const Section = styled.section< { height: string } >`
  height: ${(props) => props.height};
  padding-top: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Canvas = styled.canvas`
  &.sticky {
    position: fixed;
    top: 0;
  }
`;

const MidMessage = styled.p`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  font-size: 2rem;
  color: #888;

  @media screen and (min-width: 1024px) {
    width: 1000px;
    font-size: 4vw;
    padding: 0;
  }

  & > strong {
    color: rgb(29, 29, 31);
  }
`;

const CanvasCaption = styled.p`
  max-width: 1000px;
  margin: -24rem auto 0;
  padding: 0 1rem;
  font-size: 1.2rem;
  color: #888;

  @media screen and (min-width: 1024px) {
    margin-top: -8rem;
    font-size: 2rem;
    padding: 0;
  }
`;

function Section3() {
  const sceneNumber = 3;
  const scrollSection3 = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [allSceneInfos, setSceneInfos] = useRecoilState(sceneInfo);
  const currentSceneInfo = allSceneInfos[sceneNumber];
  const [height, setHeight] = useState(
    `${currentSceneInfo.heightNum * window.innerHeight}px`
  );

  function setDOM() {
    setSceneInfos((prev) => {
      const containerElementID = `scroll-section-${sceneNumber}`;
      const containerElement = {
        container: document.getElementById(containerElementID),
      };
      const messageObj = {
        canvasCaption: document.querySelector("#canvas-caption"),
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
  }

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
    canvasRef.current?.classList.add("sticky");

    if (document.readyState === "complete") {
      setHeight(() => {
        return `${currentSceneInfo.heightNum * window.innerHeight}px`;
      });

      setDOM();

      setLayout();
    }

    window.addEventListener("resize", () => {
      setHeight(() => {
        return `${currentSceneInfo.heightNum * window.innerHeight}px`;
      });

      setDOM();

      setLayout();
    });
  }, []);

  return (
    <Section ref={scrollSection3} height={height} id="scroll-section-3">
      <MidMessage>
        <strong>Retina Mug</strong>
        <br />
        ??????????????? ???????????? ??????
        <br />
        ???????????? ???????????? ?????? ??????.
      </MidMessage>
      <Canvas width="1920" height="1080" ref={canvasRef}></Canvas>
      <CanvasCaption id="canvas-caption">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        dicta nulla libero consequuntur officia nesciunt veniam quidem magni
        accusantium, iste animi labore ab aliquid repudiandae. Eveniet, maiores?
        Facere quis iste id omnis quae amet ducimus consequatur iure quaerat
        libero doloremque, deserunt voluptatem ad illo veniam cumque incidunt
        maiores modi corporis aspernatur laborum ut beatae quisquam! Qui soluta
        placeat aliquid alias consectetur cupiditate est magni excepturi vitae
        ut, voluptatibus similique porro explicabo perspiciatis. Eum suscipit
        incidunt doloremque, ut at aliquam neque aliquid corporis magnam iste
        sit maxime accusantium ea deserunt adipisci consectetur voluptatibus
        dolore! Perspiciatis nesciunt sapiente beatae, vitae officiis enim.
      </CanvasCaption>
    </Section>
  );
}

export default Section3;
