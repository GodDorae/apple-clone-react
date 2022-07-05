import { sceneInfo } from "../interface";
import { useRecoilValue } from "recoil";
import { useState } from "react";

function setLayout() {
  const allSceneInfos = useRecoilValue(sceneInfo);
  for (let i = 0; i < allSceneInfos.length; i++) {
    const [height, setHeight] = useState(allSceneInfos[i].scrollHeight);
    setHeight(() => {
      return allSceneInfos[i].heightNum * window.innerHeight;
    })
    // allSceneInfos[i].scrollHeight =
    //   allSceneInfos[i].heightNum * window.innerHeight;
    // allSceneInfos[
    //   i
    // ].objs.container.style.height = `${allSceneInfos[i].scrollHeight}px`;
    allSceneInfos[i].objs.container.style.height = `${height}px`;
  }
}

export default setLayout;
