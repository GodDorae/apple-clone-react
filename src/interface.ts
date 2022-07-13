import { atom, selector } from "recoil";

export interface ISceneInfo {
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

export interface ISceneInfo0 extends ISceneInfo {
  objs: IObjs0;
  values: object;
}

const sceneInfo0: ISceneInfo0 = {
  type: "sticky",
  heightNum: 5,
  scrollHeight: 0,
  objs: {
    container: null,
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
    container: null,
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

export interface ISceneInfo2 extends ISceneInfo {
  objs: IObjs2;
  values: object;
}

const sceneInfo2: ISceneInfo2 = {
  type: "sticky",
  heightNum: 5,
  scrollHeight: 0,
  objs: {
    container: null,
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

export interface ISceneInfo3 extends ISceneInfo {
  objs: IObjs3;
  values: object;
}

const sceneInfo3: ISceneInfo3 = {
  type: "sticky",
  heightNum: 5,
  scrollHeight: 0,
  objs: {
    container: null,
    canvasCaption: document.querySelector("#canvas-caption"),
  },
  values: {},
};

export const sceneInfo = atom<
  [ISceneInfo0, ISceneInfo, ISceneInfo2, ISceneInfo3]
>({
  key: "sceneInfo",
  default: [sceneInfo0, sceneInfo1, sceneInfo2, sceneInfo3],
});

export const initialSceneInfo = selector<
  [ISceneInfo0, ISceneInfo, ISceneInfo2, ISceneInfo3]
>({
  key: "initialSceneInfo",
  get: ({ get }) => {
    const allSceneInfos = get(sceneInfo);
    return allSceneInfos;
  },
  set: ({ set }, newValue) => set(sceneInfo, newValue),
});

export let yOffset = atom<number>({
  key: "yOffset",
  default: 0,
});

export let prevScrollHeight = atom<number>({
  key: "prevScrollHeight",
  default: 0,
});

export let currentScene = atom<number>({
  key: "currentScene",
  default: 0,
});
