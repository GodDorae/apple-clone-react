import { sceneInfo } from "../interface";
import { useRecoilValue } from "recoil";

function setLayout() {
  const allSceneInfos = useRecoilValue(sceneInfo);
  for (let i = 0; i < allSceneInfos.length; i++) {
    allSceneInfos[i].scrollHeight =
      allSceneInfos[i].heightNum * window.innerHeight;
    allSceneInfos[
      i
    ].objs.container.style.height = `${allSceneInfos[i].scrollHeight}px`;
  }
}

export default setLayout;
