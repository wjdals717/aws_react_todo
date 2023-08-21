import { css } from "@emotion/react";

export const GSCommon = css`
    *{
        box-sizing: border-box;
        color: #333;
    }

    *::-webkit-scrollbar{           //스크롤바 전체
        border: none;
        width: 5px;
    }
    
    *::-webkit-scrollbar-thumb{     //드래그 가능한 스크롤 핸들 막대
        border-radius: 5px;
        background-color: #dbdbdb;
    }

    html {
        background-color: #bbd2bd;
    }
`;