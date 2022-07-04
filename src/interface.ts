import { atom } from "recoil";

export interface ISceneInfo {
    type: string;
    heightNum: number;
    scrollHeight: number;
    objs: object;
    values: object;
}

const sceneInfo0: ISceneInfo = {
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
    values: {}
};

const sceneInfo1: ISceneInfo = {
    type: "normal",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
        container: document.querySelector("#scroll-section-1"),
    },
    values: {}
};

const sceneInfo2: ISceneInfo = {
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
    values: {}
};

const sceneInfo3: ISceneInfo = {
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
        container: document.querySelector("#scroll-section-3"),
        canvasCaption: document.querySelector("#canvas-caption"),
    },
    values: {}
};

export const sceneInfo = atom<ISceneInfo[]>({
    key: "sceneInfo",
    default: [sceneInfo0, sceneInfo1, sceneInfo2, sceneInfo3],
})
