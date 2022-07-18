import styled from "styled-components";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Section0 from "./components/Section0";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import { scrollInfo, initialSceneInfo, enterNewScene } from "./interface";
import { useRecoilValue, useRecoilState } from "recoil";
import { useCallback, useEffect } from "react";


const Container = styled.div`
  overflow-x: hidden;
`;

function AppleClone() {
  const allSceneInfos = useRecoilValue(initialSceneInfo);
  const [scrollInfoValue, setScrollInfoValue] = useRecoilState(scrollInfo);
  const [enterNewSceneValue, setEnterNewSceneValue] = useRecoilState(enterNewScene);

  function calcValues(values: [number, number, { start: number, end: number }], currentYOffset: number) {
    let rv;
    const scrollHeight = allSceneInfos[scrollInfoValue.currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    if (values.length === 3) {
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        rv =
          ((currentYOffset - partScrollStart) / partScrollHeight) *
            (values[1] - values[0]) +
          values[0];
      } else if (currentYOffset < partScrollStart) {
        rv = values[0];
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }

    return rv;
  }

  const playAnimation = useCallback(() => {
    const currentYOffset = window.scrollY - scrollInfoValue.prevScrollHeight;
    const scrollRatio = currentYOffset / allSceneInfos[scrollInfoValue.currentScene].scrollHeight;

    switch (scrollInfoValue.currentScene) {
      case 0:
        const objs0 = allSceneInfos[0].objs;
        const values0 = allSceneInfos[0].values;
        if (scrollRatio <= 0.22 && objs0?.messageA) {
          // in
          objs0.messageA.style.opacity = `${calcValues(
            values0.messageA_opacity_in,
            currentYOffset
          )}`;
          objs0.messageA.style.transform = `translate3d(0, ${calcValues(
            values0.messageA_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else if (scrollRatio > 0.22 && objs0?.messageA) {
          // out
          objs0.messageA.style.opacity = `${calcValues(
            values0.messageA_opacity_out,
            currentYOffset
          )}`;
          objs0.messageA.style.transform = `translate3d(0, ${calcValues(
            values0.messageA_translateY_out,
            currentYOffset
          )}%, 0)`;
        }

        if (scrollRatio <= 0.42 && objs0?.messageB) {
          // in
          objs0.messageB.style.opacity = `${calcValues(
            values0.messageB_opacity_in,
            currentYOffset
          )}`;
          objs0.messageB.style.transform = `translate3d(0, ${calcValues(
            values0.messageB_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else if (scrollRatio > 0.42 && objs0?.messageB) {
          // out
          objs0.messageB.style.opacity = `${calcValues(
            values0.messageB_opacity_out,
            currentYOffset
          )}`;
          objs0.messageB.style.transform = `translate3d(0, ${calcValues(
            values0.messageB_translateY_out,
            currentYOffset
          )}%, 0)`;
        }

        if (scrollRatio <= 0.62 && objs0?.messageC) {
          // in
          objs0.messageC.style.opacity = `${calcValues(
            values0.messageC_opacity_in,
            currentYOffset
          )}`;
          objs0.messageC.style.transform = `translate3d(0, ${calcValues(
            values0.messageC_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else if (scrollRatio > 0.62 && objs0?.messageC) {
          // out
          objs0.messageC.style.opacity = `${calcValues(
            values0.messageC_opacity_out,
            currentYOffset
          )}`;
          objs0.messageC.style.transform = `translate3d(0, ${calcValues(
            values0.messageC_translateY_out,
            currentYOffset
          )}%, 0)`;
        }

        if (scrollRatio <= 0.82 && objs0?.messageD) {
          // in
          objs0.messageD.style.opacity = `${calcValues(
            values0.messageD_opacity_in,
            currentYOffset
          )}`;
          objs0.messageD.style.transform = `translate3d(0, ${calcValues(
            values0.messageD_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else if (scrollRatio > 0.82 && objs0?.messageD) {
          // out
          objs0.messageD.style.opacity = `${calcValues(
            values0.messageD_opacity_out,
            currentYOffset
          )}`;
          objs0.messageD.style.transform = `translate3d(0, ${calcValues(
            values0.messageD_translateY_out,
            currentYOffset
          )}%, 0)`;
        }
        break;
      case 2:
        const objs2 = allSceneInfos[2].objs;
        const values2 = allSceneInfos[2].values;

        if (scrollRatio <= 0.25 && objs2?.messageA) {
          // in
          objs2.messageA.style.opacity = `${calcValues(
            values2.messageA_opacity_in,
            currentYOffset
          )}`;
          objs2.messageA.style.transform = `translate3d(0, ${calcValues(
            values2.messageA_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else if (scrollRatio > 0.25 && objs2?.messageA) {
          // out
          objs2.messageA.style.opacity = `${calcValues(
            values2.messageA_opacity_out,
            currentYOffset
          )}`;
          objs2.messageA.style.transform = `translate3d(0, ${calcValues(
            values2.messageA_translateY_out,
            currentYOffset
          )}%, 0)`;
        }

        if (scrollRatio <= 0.57 && objs2?.messageB && objs2?.pinB) {
          // in
          objs2.messageB.style.transform = `translate3d(0, ${calcValues(
            values2.messageB_translateY_in,
            currentYOffset
          )}%, 0)`;
          objs2.messageB.style.opacity = `${calcValues(
            values2.messageB_opacity_in,
            currentYOffset
          )}`;
          objs2.pinB.style.transform = `scaleY(${calcValues(
            values2.pinB_scaleY,
            currentYOffset
          )})`;
        } else if (scrollRatio > 0.57 && objs2?.messageB && objs2?.pinB) {
          // out
          objs2.messageB.style.transform = `translate3d(0, ${calcValues(
            values2.messageB_translateY_out,
            currentYOffset
          )}%, 0)`;
          objs2.messageB.style.opacity = `${calcValues(
            values2.messageB_opacity_out,
            currentYOffset
          )}`;
          objs2.pinB.style.transform = `scaleY(${calcValues(
            values2.pinB_scaleY,
            currentYOffset
          )})`;
        }

        if (scrollRatio <= 0.83 && objs2?.messageC && objs2?.pinC) {
          // in
          objs2.messageC.style.transform = `translate3d(0, ${calcValues(
            values2.messageC_translateY_in,
            currentYOffset
          )}%, 0)`;
          objs2.messageC.style.opacity = `${calcValues(
            values2.messageC_opacity_in,
            currentYOffset
          )}`;
          objs2.pinC.style.transform = `scaleY(${calcValues(
            values2.pinC_scaleY,
            currentYOffset
          )})`;
        } else if (scrollRatio > 0.83 && objs2?.messageC && objs2?.pinC) {
          // out
          objs2.messageC.style.transform = `translate3d(0, ${calcValues(
            values2.messageC_translateY_out,
            currentYOffset
          )}%, 0)`;
          objs2.messageC.style.opacity = `${calcValues(
            values2.messageC_opacity_out,
            currentYOffset
          )}`;
          objs2.pinC.style.transform = `scaleY(${calcValues(
            values2.pinC_scaleY,
            currentYOffset
          )})`;
        }

        break;
      case 3:
        break;
    }
  }, [scrollInfoValue]);

  const scrollLoop = useCallback(() => {
    setScrollInfoValue((prev) => {
      const yOffsetValue = window.scrollY;
      let tempCurrentScene = prev.currentScene;
      let tempPrev = 0;
      for (let i = 0; i < tempCurrentScene; i++) {
        tempPrev += allSceneInfos[i].scrollHeight;
      };
      if (yOffsetValue > tempPrev + allSceneInfos[tempCurrentScene].scrollHeight) {
        if (tempCurrentScene < allSceneInfos.length - 1) {
          tempCurrentScene++;
        }
      }

      if (yOffsetValue < tempPrev) {
        if (tempCurrentScene === 0) return prev;
        tempCurrentScene--;
      }

      document.body.setAttribute('id', `show-scene-${tempCurrentScene}`);

      const newArray = { currentScene: tempCurrentScene, prevScrollHeight: tempPrev };

      return newArray;
    })
  }, [window.scrollY, allSceneInfos]);

  const controlEnterNewScene = useCallback(() => {
    setEnterNewSceneValue(() => {
      return false;
    });

    if (window.scrollY > scrollInfoValue.prevScrollHeight + allSceneInfos[scrollInfoValue.currentScene].scrollHeight) {
      setEnterNewSceneValue(() => {
        return true;
      });
    }

    if (window.scrollY < scrollInfoValue.prevScrollHeight) {
      setEnterNewSceneValue(() => {
        return true;
      });
    }
  }, [scrollInfoValue]);

  useEffect(() => {
    if (allSceneInfos[1].scrollHeight) {
      window.addEventListener("scroll", scrollLoop);

      controlEnterNewScene();

      if (!enterNewSceneValue) {
        playAnimation();
       }
    }
  }, [scrollLoop]);

  return (
    <Container>
      <Navigation />
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </Container>
  );
}

export default AppleClone;
