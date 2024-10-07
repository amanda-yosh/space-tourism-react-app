import { styled } from "styled-components";

import { breakpoints } from '../../utils/breakpoints'

const { desktop } = breakpoints

export const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${desktop}) {
        flex-direction: row-reverse;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 16px;
    margin-top: 40px;
    max-width: 512px;

    @media (min-width: ${desktop}) {
        text-align: start;
    }
`

export const ImgWrapper = styled.div`
    max-height: 258px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-height: 258px;
        width: 100%;
    }
`
