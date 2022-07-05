import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { sceneInfo } from "../interface";
import { useRecoilValue } from "recoil";

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
  const scrollSection1 = useRef<HTMLElement>(null);
  const allSceneInfos = useRecoilValue(sceneInfo);
  const [height, setHeight] = useState(allSceneInfos[0].scrollHeight);

  function heightCalc() {
    setHeight(() => {
      return allSceneInfos[1].heightNum * window.innerHeight;
    });
    if (scrollSection1.current) {
      scrollSection1.current.style.height = `${height}px`;
    };
  }

  useEffect(() => {
    heightCalc();
    window.addEventListener("resize", heightCalc);
  }, [])

  return (
    <Section ref={scrollSection1}>
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
