/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import React, { useEffect } from 'react';
import { isSidebarShowState, isRightSubSidebarState } from '../../store/sidebarStore';
import { useRecoilState } from 'recoil';

function MainContainer({ children }) {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);
    useEffect(() => {
        return () => {
            setIsRightSubSidebar(false);    //무조건 닫히도록 false
        }
    }, []);

    return (
        <div css={S.SContainer(isSidebarShow, isRightSubSidebar)}>
            {children}
        </div>
    );
}

export default MainContainer;