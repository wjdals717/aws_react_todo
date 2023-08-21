/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { isRightSubSidebarState } from "../../../store/sidebarStore";

function TaskList({ target, setTarget }) {
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    const handleOpenClick = (e) => {
        if(target === e.target){         //선택되어진 것이 자기자신이면
            setIsRightSubSidebar(false); //닫힘
            setTarget(null);
        } else if (target === null){    //선택되어진 창이 없으면 
            setIsRightSubSidebar(true); //target에 자기 자신을 넣어줌
            setTarget(e.target);
        } else {
            setTarget(e.target);
        }
    }

    const handleCheckBoxClick = (e) => { 
        //버블링 방지 : 이벤트 전파를 방지
        e.stopPropagation();
    }

    return (
        <ul css={S.SLayout}>
            <li css={S.SListBox} onClick={handleOpenClick}>
                <div css={S.SListContent}>
                    <input css={S.SCheckBox} type="checkbox" onClick={handleCheckBoxClick} />
                    <span>Research content idea</span>
                </div>
                <FaChevronRight />
            </li>
        </ul>
    );
}

export default TaskList;