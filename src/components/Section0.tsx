import styled from "styled-components";

const Section = styled.section`
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
  const showScene: boolean = document.body.id === "show-scene-0";

  return (
    <Section id="scroll-section-0">
      <Title>Airmug Pro</Title>
      <MainMessageA id="section0-a" showScene={showScene}>
        <p>
          온전히 빠져들게 하는
          <br />
          최고급 세라믹
        </p>
      </MainMessageA>
      <MainMessageB id="section0-b" showScene={showScene}>
        <p>
          주변 맛을 느끼게 해주는
          <br />
          주변 맛 허용 모드
        </p>
      </MainMessageB>
      <MainMessageC id="section0-c" showScene={showScene}>
        <p>
          온종일 편안한
          <br />
          맞춤형 손잡이
        </p>
      </MainMessageC>
      <MainMessageD id="section0-d" showScene={showScene}>
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
