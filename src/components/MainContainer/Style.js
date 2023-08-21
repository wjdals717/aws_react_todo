import { css } from "@emotion/react";

export const SContainer = ( isMainSidebarShow, isRightSubSidebar ) => {
    let width = 934;
    if(isMainSidebarShow){
        width -= 210;
    }
    if(isRightSubSidebar){
        width -= 310;
    }

    return css`
    position: absolute;
    transition: all 0.8s ease;
    z-index: -1;
    left: ${isMainSidebarShow ? "270px" : "60px"};
    border-radius: 10px;
    padding: 20px;
    width: ${width}px;
    height: 560px;
    background-color: #fafafa;
    `
};  