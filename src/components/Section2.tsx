import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { sceneInfo } from "../interface";
import { useRecoilValue } from "recoil";

const Section = styled.section`
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

const MessageA = styled(MainMessage)<{ showScene: boolean }>`
  display: ${(props) => (props.showScene ? "block" : "none")};
  position: fixed;
  left: 0;
  width: 100%;
`;
const MessageB = styled(DescMessage)<{ showScene: boolean }>`
  display: ${(props) => (props.showScene ? "block" : "none")};
  position: fixed;
  width: 100%;
  top: 10%;
  left: 40%;

  @media screen and (min-width: 1024px) {
    top: 20%;
    left: 53%;
  }
`;
const MessageC = styled(DescMessage)<{ showScene: boolean }>`
  display: ${(props) => (props.showScene ? "block" : "none")};
  position: fixed;
  width: 100%;
  top: 15%;
  left: 45%;

  @media screen and (min-width: 1024px) {
    left: 55%;
  }
`;

function Section2() {
  const showScene: boolean = document.body.id === "show-scene-2";
  const scrollSection2 = useRef<HTMLElement>(null);
  const allSceneInfos = useRecoilValue(sceneInfo);
  const [height, setHeight] = useState(allSceneInfos[2].scrollHeight);

  function heightCalc() {
    setHeight(() => {
      return allSceneInfos[2].heightNum * window.innerHeight;
    });
    if (scrollSection2.current) {
      scrollSection2.current.style.height = `${height}px`;
    };
  }

  useEffect(() => {
    heightCalc();
    window.addEventListener("resize", heightCalc);
  }, [])


  return (
    <Section ref={scrollSection2}>
      <MessageA id="section2-a" showScene={showScene}>
        <p>
          <small>편안한 촉감</small>
          입과 하나 되다
        </p>
      </MessageA>
      <MessageB id="section2-b" showScene={showScene}>
        <p>
          편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
          하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
          Airmug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어디새 사라지고
          오롯이 당신과 음료만 남게 되죠.
        </p>
        <Pin id="section2-b-pin"/>
      </MessageB>
      <MessageC id="section2-c" showScene={showScene}>
        <p>
          Design and quality of Sweden,
          <br />
          Made in China
        </p>
        <Pin id="section2-c-pin"/>
      </MessageC>
    </Section>
  );
}

export default Section2;
