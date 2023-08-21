/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import * as S from "./Style";
import { isSidebarShowState } from "../../store/sidebarStore";
import { useRecoilState } from "recoil";

function Today(props) {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);
    return (
        <div css={S.SLayout}>
            
        </div>
    );
}

export default Today;