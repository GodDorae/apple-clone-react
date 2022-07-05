import { atom } from "recoil";

interface ISceneInfo {
  type: string;
  heightNum: number;
  scrollHeight: number;
  objs: IObjs;
  values: object;
}

interface IObjs {
  container: HTMLElement | null;
}

interface IObjs0 extends IObjs {
  messageA: HTMLDivElement | null;
  messageB: HTMLDivElement | null;
  messageC: HTMLDivElement | null;
  messageD: HTMLDivElement | null;
}

interface ISceneInfo0 extends ISceneInfo {
  objs: IObjs0;
  values: object;
}

const sceneInfo0: ISceneInfo0 = {
  type: "sticky",
  heightNum: 5,
  scrollHeight: 0,
  objs: {
    container: document.querySelector("#scroll-section-0"),
    messageA: document.querySelector("section0-a"),
    messageB: document.querySelector("section0-b"),
    messageC: document.querySelector("section0-c"),
    messageD: document.querySelector("section0-d"),
  },
  values: {},
};

const sceneInfo1: ISceneInfo = {
  type: "normal",
  heightNum: 5,
  scrollHeight: 0,
  objs: {
    container: document.querySelector("#scroll-section-1"),
  },
  values: {},
};

interface IObjs2 extends IObjs {
  messageA: HTMLDivElement | null;
  messageB: HTMLDivElement | null;
  messageC: HTMLDivElement | null;
  pinB: HTMLDivElement | null;
  pinC: HTMLDivElement | null;
}

interface ISceneInfo2 extends ISceneInfo {
  objs: IObjs2;
  values: object;
}

const sceneInfo2: ISceneInfo2 = {
  type: "sticky",
  heightNum: 5,
  scrollHeight: 0,
  objs: {
    container: document.querySelector("#scroll-section-2"),
    messageA: document.querySelector("section2-a"),
    messageB: document.querySelector("section2-b"),
    messageC: document.querySelector("section2-c"),
    pinB: document.querySelector("section2-b-pin"),
    pinC: document.querySelector("section2-c-pin"),
  },
  values: {},
};

interface IObjs3 extends IObjs {
  canvasCaption: HTMLDivElement | null;
}

interface ISceneInfo3 extends ISceneInfo {
  objs: IObjs3;
  values: object;
}

const sceneInfo3: ISceneInfo3 = {
  type: "sticky",
  heightNum: 5,
  scrollHeight: 0,
  objs: {
    container: document.querySelector("#scroll-section-3"),
    canvasCaption: document.querySelector("#canvas-caption"),
  },
  values: {},
};

export const sceneInfo = atom<ISceneInfo[]>({
  key: "sceneInfo",
  default: [sceneInfo0, sceneInfo1, sceneInfo2, sceneInfo3],
});
