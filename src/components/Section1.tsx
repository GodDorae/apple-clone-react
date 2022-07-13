import styled from "styled-components";
import {
  ISceneInfo,
  ISceneInfo0,
  ISceneInfo2,
  ISceneInfo3,
  sceneInfo,
} from "../interface";
import { useCallback, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

const Section = styled.section`
  padding-top: 50vh;
`;

const Description = styled.p`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  font-size: 1.2rem;
  color: #888;

  @media screen and (min-width: 1024px) {
    padding: 0;
    font-size: 2rem;
  }

  & > strong {
    float: left;
    margin-right: 0.2em;
    font-size: 3rem;
    color: rgb(29, 29, 31);

    @media screen and (min-width: 1024px) {
      font-size: 6rem;
    }
  }
`;

function Section1() {
  const sceneNumber = 1;
  const scrollSection1 = useRef<HTMLElement>(null);
  const [allSceneInfos, setSceneInfos] = useRecoilState(sceneInfo);
  const currentSceneInfo = allSceneInfos[sceneNumber];

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

  const setDOM = useCallback(() => {
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
  }, [allSceneInfos[sceneNumber].objs]);

  useEffect(() => {
    if (document.readyState === "complete") {
      setDOM();
    }

    window.addEventListener("resize", () => {
      setDOM();
    });
  }, []);

  useEffect(() => {
    setLayout();
  }, [setDOM]);

  useEffect(() => {
    // console.log(allSceneInfos);
  }, [allSceneInfos]);

  return (
    <Section ref={scrollSection1} id="scroll-section-1">
      <Description>
        <strong>보통 스크롤 영역</strong>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        doloremque praesentium sapiente eos minima rem suscipit obcaecati.
        Blanditiis expedita tempore ipsa aliquam pariatur obcaecati in! Quaerat
        praesentium molestias maiores voluptatem repellat sit dolor sunt atque
        at harum! Tempore aspernatur sit, laborum tempora quis architecto
        distinctio temporibus quas tenetur commodi, cum dicta dolorem, assumenda
        esse fugit repellat! Voluptatum odit necessitatibus optio, quaerat quia
        dolores, sequi tempora explicabo tempore nobis quam consectetur nihil
        ipsa! Commodi veniam dolore minima pariatur facilis, autem quidem esse
        error voluptates odit corrupti ratione, tenetur culpa iure alias
        consequuntur. Placeat debitis autem, aliquam iusto neque labore deserunt
        eius voluptatem libero voluptas dolore officiis nemo nostrum excepturi
        est, dolorem, soluta sed sequi modi. Cum fugiat, delectus porro
        accusamus laborum ut impedit temporibus itaque harum sapiente possimus,
        nam, eveniet minus similique! Nisi cupiditate eaque facilis voluptatem
        sint, possimus tempora odio. Voluptates, voluptate. Facere, suscipit
        minus ducimus recusandae officiis labore, iure quod magnam ipsum
        provident sint culpa hic optio, sed repudiandae eum fugit ea excepturi
        nesciunt delectus dolor quae voluptate autem. Illo fugit beatae debitis
        at fugiat aut vel illum quisquam consequuntur et, itaque eaque inventore
        minus labore? Quisquam voluptatibus reiciendis dolor natus obcaecati
        ducimus, animi excepturi hic dolorum voluptates soluta.
      </Description>
    </Section>
  );
}

export default Section1;
