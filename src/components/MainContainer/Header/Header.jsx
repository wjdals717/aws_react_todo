/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import * as S from "./Style";

function Header({ title, count }) {
    return (
        <div css={S.SLayout}>
            <h1 css={S.STitle}>{title}</h1>
            <div css={S.SCountBox}>{count}</div>
        </div>
    );
}

export default Header;