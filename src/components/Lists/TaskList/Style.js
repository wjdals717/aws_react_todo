import { css } from "@emotion/react";

export const SLayout =  css`
    width: 100%;
    height: ${520 - 117}px;
    overflow-y: auto;       //자동으로 늘어났을 때 스크롤 생성
`;

export const SListBox =  css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #dbdbdb;
    padding: 15px 20px;
    width: 100%;
    font-weight: 500;
    cursor: pointer;
`;

export const SListContent =  css`
    display: flex;
    align-items: center;
`;

export const SCheckBox =  css`
    margin-right: 10px;

`;