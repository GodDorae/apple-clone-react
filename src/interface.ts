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
  canvas: HTMLCanvasElement | null;
  context: any;
  videoImages: Array<HTMLImageElement>;
}

interface IValues0 {
  videoImageCount: number,
  imageSequence: [number, number],
  canvas_opacity: [number, number, { start: number, end: number }],
  messageA_opacity_in: [number, number, { start: number, end: number }],
  messageB_opacity_in: [number, number, { start: number, end: number }],
  messageC_opacity_in: [number, number, { start: number, end: number }],
  messageD_opacity_in: [number, number, { start: number, end: number }],
  messageA_translateY_in: [number, number, { start: number, end: number }],
  messageB_translateY_in: [number, number, { start: number, end: number }],
  messageC_translateY_in: [number, number, { start: number, end: number }],
  messageD_translateY_in: [number, number, { start: number, end: number }],
  messageA_opacity_out: [number, number, { start: number, end: number }],
  messageB_opacity_out: [number, number, { start: number, end: number }],
  messageC_opacity_out: [number, number, { start: number, end: number }],
  messageD_opacity_out: [number, number, { start: number, end: number }],
  messageA_translateY_out: [number, number, { start: number, end: number }],
  messageB_translateY_out: [number, number, { start: number, end: number }],
  messageC_translateY_out: [number, number, { start: number, end: number }],
  messageD_translateY_out: [number, number, { start: number, end: number }],
}

export interface ISceneInfo0 extends ISceneInfo {
  objs: IObjs0;
  values: IValues0;
}

const sceneInfo0: ISceneInfo0 = {
  type: "sticky",
  heightNum: 5,
  scrollHeight: 0,
  objs: {
    container: null,
    messageA: null,
    messageB: null,
    messageC: null,
    messageD: null,
    canvas: null,
    context: null,
    videoImages: [],
  },
  values: {
    videoImageCount: 300,
    imageSequence: [0, 299],
    canvas_opacity: [1, 0, { start: 0.9, end: 1 }],
    messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
    messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
    messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
    messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
    messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
    messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
    messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
    messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
    messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
    messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
    messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
    messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
    messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
    messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
    messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
    messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
  },
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
  canvas: HTMLCanvasElement | null;
  context: any;
  videoImages: Array<HTMLImageElement>;
}

interface IValues2 {
  videoImageCount: number,
  imageSequence: [number, number],
  canvas_opacity_in: [number, number, { start: number, end: number }],
  canvas_opacity_out: [number, number, { start: number, end: number }],
  messageA_translateY_in: [number, number, { start: number, end: number }],
  messageB_translateY_in: [number, number, { start: number, end: number }],
  messageC_translateY_in: [number, number, { start: number, end: number }],
  messageA_opacity_in: [number, number, { start: number, end: number }],
  messageB_opacity_in: [number, number, { start: number, end: number }],
  messageC_opacity_in: [number, number, { start: number, end: number }],
  messageA_translateY_out: [number, number, { start: number, end: number }],
  messageB_translateY_out: [number, number, { start: number, end: number }],
  messageC_translateY_out: [number, number, { start: number, end: number }],
  messageA_opacity_out: [number, number, { start: number, end: number }],
  messageB_opacity_out: [number, number, { start: number, end: number }],
  messageC_opacity_out: [number, number, { start: number, end: number }],
  pinB_scaleY: [number, number, { start: number, end: number }],
  pinC_scaleY: [number, number, { start: number, end: number }],
  pinB_opacity_in: [number, number, { start: number, end: number }],
  pinC_opacity_in: [number, number, { start: number, end: number }],
  pinB_opacity_out: [number, number, { start: number, end: number }],
  pinC_opacity_out: [number, number, { start: number, end: number }],
}

export interface ISceneInfo2 extends ISceneInfo {
  objs: IObjs2;
  values: IValues2;
}

const sceneInfo2: ISceneInfo2 = {
  type: "sticky",
  heightNum: 5,
  scrollHeight: 0,
  objs: {
    container: null,
    messageA: null,
    messageB: null,
    messageC: null,
    pinB: null,
    pinC: null,
    canvas: null,
    context: null,
    videoImages: [],
  },
  values: {
    videoImageCount: 960,
    imageSequence: [0, 959],
    canvas_opacity_in: [0, 1, { start: 0, end: 0.1 }],
    canvas_opacity_out: [1, 0, { start: 0.95, end: 1 }],
    messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
    messageB_translateY_in: [30, 0, { start: 0.5, end: 0.55 }],
    messageC_translateY_in: [30, 0, { start: 0.72, end: 0.77 }],
    messageA_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
    messageB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
    messageC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
    messageA_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
    messageB_translateY_out: [0, -20, { start: 0.58, end: 0.63 }],
    messageC_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
    messageA_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
    messageB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
    messageC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
    pinB_scaleY: [0.5, 1, { start: 0.5, end: 0.55 }],
    pinC_scaleY: [0.5, 1, { start: 0.72, end: 0.77 }],
    pinB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
    pinC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
    pinB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
    pinC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
  },
};

interface IObjs3 extends IObjs {
  canvasCaption: HTMLDivElement | null;
  canvas: HTMLCanvasElement | null;
  context: any;
  imagesPath: Array<string>;
  images: Array<HTMLImageElement>;
}

interface IValues3 {
  rect1X: [number, number, { start: number, end: number }],
  rect2X: [number, number, { start: number, end: number }],
  rectStartY: number,
  blendHeight: [number, number, { start: number, end: number }],
  canvas_scale: [number, number, { start: number, end: number }],
  canvasCaption_opacity: [number, number, { start: number, end: number }],
  canvasCaption_translateY: [number, number, { start: number, end: number }],
}

export interface ISceneInfo3 extends ISceneInfo {
  objs: IObjs3;
  values: IValues3;
}

const sceneInfo3: ISceneInfo3 = {
  type: "sticky",
  heightNum: 5,
  scrollHeight: 0,
  objs: {
    container: null,
    canvasCaption: null,
    canvas: null,
    context: null,
    imagesPath: [
      "/assets/images/blend-image-1.jpg",
      "/assets/images/blend-image-2.jpg",
    ],
    images: [],
  },
  values: {
    rect1X: [0, 0, { start: 0, end: 0 }],
    rect2X: [0, 0, { start: 0, end: 0 }],
    rectStartY: 0,
    blendHeight: [0, 0, { start: 0, end: 0 }],
    canvas_scale: [0, 0, { start: 0, end: 0 }],
    canvasCaption_opacity: [0, 1, { start: 0, end: 0 }],
    canvasCaption_translateY: [20, 0, { start: 0, end: 0 }],
  },
};

export const sceneInfo = atom<
  [ISceneInfo0, ISceneInfo, ISceneInfo2, ISceneInfo3]
>({
  key: "sceneInfo",
  default: [sceneInfo0, sceneInfo1, sceneInfo2, sceneInfo3],
});

interface IScrollInfo {
  prevScrollHeight: number
  currentScene: number
}

export const scrollInfo = atom<IScrollInfo>({
  key: "scrollInfo",
  default: { prevScrollHeight: 0, currentScene: 0 }
});
