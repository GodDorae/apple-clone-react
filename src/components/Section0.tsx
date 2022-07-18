import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import {
  ISceneInfo,
  ISceneInfo0,
  ISceneInfo2,
  ISceneInfo3,
  sceneInfo,
  scrollInfo
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
  const [showScene, setShowScene] = useState(false);
  const scrollSection0 = useRef<HTMLElement>(null);
  const [allSceneInfos, setSceneInfos] = useRecoilState(sceneInfo);
  const currentSceneInfo = allSceneInfos[sceneNumber];
  const [height, setHeight] = useState(
    `${currentSceneInfo.heightNum * window.innerHeight}px`
  );
  const [scrollInfoValue, setScrollInfoValue] = useRecoilState(scrollInfo);

  function setDOM() {
    setSceneInfos((prev) => {
      const currentSceneObj = prev[sceneNumber].objs;
      const containerElementID = `scroll-section-${sceneNumber}`;
      const containerElement = {
        container: document.getElementById(containerElementID),
      };
      const updatedObj = { ...currentSceneObj, ...containerElement };
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

  function setCurrentScene() {
    let totalScrollHeight = 0;
    for (let i = 0; i < allSceneInfos.length; i++) {
      totalScrollHeight += allSceneInfos[i].scrollHeight;
      if (totalScrollHeight >= window.scrollY) {
        setScrollInfoValue((prev) => {
          const newArray = {...prev, currentScene: i};
          return newArray;
        });
        break;
      }
    }

    document.body.setAttribute("id", `show-scene-${scrollInfoValue.currentScene}`);
  }

  useEffect(() => {
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

  useEffect(() => {
    if (allSceneInfos[1].scrollHeight) {
      setCurrentScene();
    }
  }, [allSceneInfos, window.scrollY]);

  useEffect(() => {
    if (allSceneInfos[1].scrollHeight) {
      if (document.body.id === "show-scene-0") {
        setShowScene(() => {
          return true;
        })
      } else {
        setShowScene(() => {
          return false;
        })
      }
    }
  }, [allSceneInfos, document.body.id]);

  return (
    <Section ref={scrollSection0} height={height} id="scroll-section-0">
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
