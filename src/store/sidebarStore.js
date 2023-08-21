import { atom } from "recoil";

export const isSidebarShowState = atom({
    key: "isSidebarShow",
    default: false          // useState로 초기화 해주는 것과 같음
});