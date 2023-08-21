/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import * as S from "./Style";
import { FaPlus } from "react-icons/fa";
import { isRightSubSidebarState } from "../../../store/sidebarStore";
import { useRecoilState } from "recoil";


function AddNewTaskButton({ target, setTarget }) {
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    const handleOpenClick = (e) => {
        if(target === e.target){
            setIsRightSubSidebar(false);
            setTarget(null);
        } else if (target === null){
            setIsRightSubSidebar(true);
            setTarget(e.target);
        } else {
            setTarget(e.target);
        }
        console.log(e.target);
    }

    return (
        <div>
            <button css={S.SLayout} onClick={handleOpenClick}>
                <FaPlus css={S.SIcon}/>
                <span css={S.SName}>Add New Task</span>
            </button>
        </div>
    );
}

export default AddNewTaskButton;