import styled from "styled-components";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Section0 from "./components/Section0";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import {
  ISceneInfo,
  ISceneInfo0,
  ISceneInfo2,
  ISceneInfo3,
  scrollInfo,
  sceneInfo,
} from "./interface";
import { useRecoilState } from "recoil";
import { useCallback, useEffect } from "react";

const Container = styled.div`
  overflow-x: hidden;
`;

function AppleClone() {
  const [allSceneInfos, setAllSceneInfos] = useRecoilState(sceneInfo);
  const [scrollInfoValue, setScrollInfoValue] = useRecoilState(scrollInfo);

  function setCanvasImages() {
    let imgElem, imgElem2, imgElem3;
    let array1 = [] as Array<HTMLImageElement>;
    let array2 = [] as Array<HTMLImageElement>;
    let array3 = [] as Array<HTMLImageElement>;

    for (let i = 0; i < allSceneInfos[0].values.videoImageCount; i++) {
      imgElem = document.createElement("img");
      imgElem.src = `/assets/video/001/IMG_${6726 + i}.JPG`;
      array1.push(imgElem);
    }
    setAllSceneInfos((prev) => {
      const objs = { ...prev[0].objs };
      const newObjs = { ...objs, videoImages: array1 };
      const updatedSceneInfo = { ...prev[0], objs: newObjs };
      const after = prev.slice(1);
      const newArray = [updatedSceneInfo, ...after];

      return newArray as [ISceneInfo0, ISceneInfo, ISceneInfo2, ISceneInfo3];
    });

    for (let i = 0; i < allSceneInfos[2].values.videoImageCount; i++) {
      imgElem2 = document.createElement("img");
      imgElem2.src = `/assets/video/002/IMG_${7027 + i}.JPG`;
      array2.push(imgElem2);
    }
    setAllSceneInfos((prev) => {
      const objs = { ...prev[2].objs };
      const newObjs = { ...objs, videoImages: array2 };
      const updatedSceneInfo = { ...prev[2], objs: newObjs };
      const before = prev.slice(0, 2);
      const after = prev.slice(3);
      const newArray = [...before, updatedSceneInfo, ...after];

      return newArray as [ISceneInfo0, ISceneInfo, ISceneInfo2, ISceneInfo3];
    });

    for (let i = 0; i < allSceneInfos[3].objs.imagesPath.length; i++) {
      imgElem3 = document.createElement("img");
      imgElem3.src = allSceneInfos[3].objs.imagesPath[i];
      array3.push(imgElem3);
    }
    setAllSceneInfos((prev) => {
      const objs = { ...prev[3].objs };
      const newObjs = { ...objs, images: array3 };
      const updatedSceneInfo = { ...prev[3], objs: newObjs };
      const before = prev.slice(0, 3);
      const newArray = [...before, updatedSceneInfo];

      return newArray as [ISceneInfo0, ISceneInfo, ISceneInfo2, ISceneInfo3];
    });
  }

  function calcValues(
    values: [number, number, { start: number; end: number }] | [number, number],
    currentYOffset: number
  ) {
    let rv;
    const scrollHeight =
      allSceneInfos[scrollInfoValue.currentScene].scrollHeight;
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

  function setCurrentScene() {
    let totalScrollHeight = 0;
    for (let i = 0; i < allSceneInfos.length; i++) {
      totalScrollHeight += allSceneInfos[i].scrollHeight;
      if (totalScrollHeight >= window.scrollY) {
        setScrollInfoValue((prev) => {
          const newArray = { ...prev, currentScene: i };
          return newArray;
        });
        break;
      }
    }

    document.body.setAttribute(
      "id",
      `show-scene-${scrollInfoValue.currentScene}`
    );
  }

  const scrollLoop = useCallback(() => {
    setScrollInfoValue((prev) => {
      const yOffsetValue = window.scrollY;
      let tempCurrentScene = prev.currentScene;
      let tempPrev = 0;
      for (let i = 0; i < tempCurrentScene; i++) {
        tempPrev += allSceneInfos[i].scrollHeight;
      }
      if (
        yOffsetValue >
        tempPrev + allSceneInfos[tempCurrentScene].scrollHeight
      ) {
        if (tempCurrentScene < allSceneInfos.length - 1) {
          tempCurrentScene++;
        }
      }

      if (yOffsetValue < tempPrev) {
        if (tempCurrentScene === 0) return prev;
        tempCurrentScene--;
      }

      document.body.setAttribute("id", `show-scene-${tempCurrentScene}`);

      const newArray = {
        currentScene: tempCurrentScene,
        prevScrollHeight: tempPrev,
      };

      return newArray;
    });
  }, [window.scrollY, allSceneInfos]);

  const playAnimation = useCallback(() => {
    const currentYOffset = window.scrollY - scrollInfoValue.prevScrollHeight;
    const scrollRatio =
      currentYOffset / allSceneInfos[scrollInfoValue.currentScene].scrollHeight;

    switch (scrollInfoValue.currentScene) {
      case 0:
        const objs0 = allSceneInfos[0].objs;
        const values0 = allSceneInfos[0].values;

        const calculation0 = calcValues(values0.imageSequence, currentYOffset);
        if (
          calculation0 &&
          calculation0 !== Infinity &&
          calculation0 >= 0 &&
          calculation0 <= 299
        ) {
          objs0.context.drawImage(
            objs0.videoImages[Math.round(calculation0)],
            0,
            0
          );
        }

        if (objs0?.canvas) {
          objs0.canvas.style.opacity = `${calcValues(
            values0.canvas_opacity,
            currentYOffset
          )}`;
        }

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
        const calculation2 = calcValues(values2.imageSequence, currentYOffset);
        if (
          calculation2 &&
          calculation2 !== Infinity &&
          calculation2 >= 0 &&
          calculation2 <= 959
        ) {
          objs2.context.drawImage(
            objs2.videoImages[Math.round(calculation2)],
            0,
            0
          );
        }

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

        if (objs2.canvas && scrollRatio <= 0.5) {
          objs2.canvas.style.opacity = `${calcValues(
            values2.canvas_opacity_in,
            currentYOffset
          )}`;
        } else if (objs2.canvas && scrollRatio > 0.5) {
          objs2.canvas.style.opacity = `${calcValues(
            values2.canvas_opacity_out,
            currentYOffset
          )}`;
        }

        break;
      case 3:
        const objs3 = allSceneInfos[3].objs;

        if (objs3.canvas && objs3.canvasCaption) {
          const widthRatio = window.innerWidth / objs3.canvas.width;
          const heightRatio = window.innerHeight / objs3.canvas.height;
          let canvasScaleRatio: number;

          if (widthRatio <= heightRatio) {
            // 캔버스보다 브라우저 창이 홀쭉한 경우
            canvasScaleRatio = heightRatio;
          } else {
            // 캔버스보다 브라우저 창이 납작한 경우
            canvasScaleRatio = widthRatio;
          }

          objs3.canvas.style.transform = `scale(${canvasScaleRatio})`;
          // objs3.context.fillStyle = "white";
          objs3.context.drawImage(objs3.images[0], 0, 0);

          const recalculatedInnerWidth =
            document.body.offsetWidth / canvasScaleRatio;
          const whiteRectWidth = recalculatedInnerWidth * 0.15;

          const rectStartY =
            objs3.canvas.offsetTop +
            (objs3.canvas.height * (1 - canvasScaleRatio)) / 2;
          const rect1XStart =
            window.innerHeight / 2 / allSceneInfos[3].scrollHeight;
          const rect1XEnd = rectStartY / allSceneInfos[3].scrollHeight;
          const rect2XStart = rect1XStart;
          const rect2XEnd = rect1XEnd;
          const rect1XStartPoint =
            (objs3.canvas.width - recalculatedInnerWidth) / 2;
          const rect1XEndPoint = rect1XStartPoint - whiteRectWidth;
          const rect2XStartPoint =
            rect1XStartPoint + recalculatedInnerWidth - whiteRectWidth;
          const rect2XEndPoint = rect2XStartPoint + whiteRectWidth;

          const rect1X: [number, number, { start: number; end: number }] = [
            rect1XStartPoint,
            rect1XEndPoint,
            { start: rect1XStart, end: rect1XEnd },
          ];
          const rect2X: [number, number, { start: number; end: number }] = [
            rect2XStartPoint,
            rect2XEndPoint,
            { start: rect2XStart, end: rect2XEnd },
          ];

          const blendHeightStartPoint = 0;
          const blendHeightEndPoint = objs3.canvas.height;
          const blendHeightStart = rect1XEnd;
          const blendHeightEnd = blendHeightStart + 0.2;
          const blendHeightArray: [
            number,
            number,
            { start: number; end: number }
          ] = [
            blendHeightStartPoint,
            blendHeightEndPoint,
            { start: blendHeightStart, end: blendHeightEnd },
          ];

          const csStartPoint = canvasScaleRatio;
          const csEndPoint =
            document.body.offsetWidth / (1.5 * objs3.canvas.width);
          const csStart = blendHeightEnd;
          const csEnd = csStart + 0.2;
          const cs: [number, number, { start: number; end: number }] = [
            csStartPoint,
            csEndPoint,
            { start: csStart, end: csEnd },
          ];

          const ccoStart = csEnd;
          const ccoEnd = ccoStart + 0.1;
          const cco: [number, number, { start: number; end: number }] = [
            0,
            1,
            { start: ccoStart, end: ccoEnd },
          ];

          const cctStart = csEnd;
          const cctEnd = cctStart + 0.1;
          const cct: [number, number, { start: number; end: number }] = [
            0,
            1,
            { start: cctStart, end: cctEnd },
          ];

          const rect1XCalculation = calcValues(rect1X, currentYOffset);
          if (rect1XCalculation) {
            objs3.context.fillRect(
              Math.round(rect1XCalculation),
              0,
              Math.round(whiteRectWidth),
              objs3.canvas.height
            );
          }

          const rect2XCalculation = calcValues(rect2X, currentYOffset);
          if (rect2XCalculation) {
            objs3.context.fillRect(
              Math.round(rect2XCalculation),
              0,
              Math.round(whiteRectWidth),
              objs3.canvas.height
            );
          }

          if (scrollRatio < rect1X[2].end) {
            objs3.canvas.classList.remove("sticky");
          } else {
            const blendHeight = calcValues(blendHeightArray, currentYOffset);

            if (blendHeight) {
              objs3.context.drawImage(
                objs3.images[1],
                0,
                objs3.canvas.height - blendHeight,
                objs3.canvas.width,
                blendHeight,
                0,
                objs3.canvas.height - blendHeight,
                objs3.canvas.width,
                blendHeight
              );
            }

            objs3.canvas.classList.add("sticky");
            objs3.canvas.style.top = `${
              -(objs3.canvas.height * (1 - canvasScaleRatio)) / 2
            }px`;

            if (scrollRatio > blendHeightArray[2].end) {
              objs3.canvas.style.transform = `scale(${calcValues(
                cs,
                currentYOffset
              )})`;

            if (scrollRatio > cs[2].end && cs[2].end > 0) {
              objs3.canvas.classList.remove("sticky");
              objs3.canvas.style.marginTop = `${
                allSceneInfos[3].scrollHeight * 0.4
              }px`;

              objs3.canvasCaption.style.opacity = `${calcValues(
                cco,
                currentYOffset
              )}`;

              objs3.canvasCaption.style.transform = `translate3d(0, ${calcValues(
                cct,
                currentYOffset
              )}%, 0)`;
            } else {
              objs3.canvas.style.marginTop = "0";
            }
          }
        }
      }
      break;
    }
  }, [scrollLoop, scrollInfoValue]);

  useEffect(() => {
    setCanvasImages();
  }, []);

  useEffect(() => {
    if (allSceneInfos[1].scrollHeight) {
      setCurrentScene();
      window.addEventListener("scroll", scrollLoop);
    }
  }, [window.scrollY, allSceneInfos]);

  useEffect(() => {
    playAnimation();
  }, [scrollLoop, scrollInfoValue]);

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
