import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { sceneInfo } from "../interface";
import { useRecoilValue } from "recoil";

const Section = styled.section`
  padding-top: 50vh;
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
  const scrollSection3 = useRef<HTMLElement>(null);
  const allSceneInfos = useRecoilValue(sceneInfo);
  const [height, setHeight] = useState(allSceneInfos[3].scrollHeight);

  function heightCalc() {
    setHeight(() => {
      return allSceneInfos[3].heightNum * window.innerHeight;
    });
    if (scrollSection3.current) {
      scrollSection3.current.style.height = `${height}px`;
    };
  }

  useEffect(() => {
    heightCalc();
    window.addEventListener("resize", heightCalc);
  }, [])

  return (
    <Section ref={scrollSection3}>
      <MidMessage>
        <strong>Retina Mug</strong>
        <br />
        아이디어를 광활하게 펼칠
        <br />
        아름답고 부드러운 음료 공간.
      </MidMessage>
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
