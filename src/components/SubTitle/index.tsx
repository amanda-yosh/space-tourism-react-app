import { styled } from "styled-components";

import { breakpoints } from '../../utils/breakpoints'

const { tablet, desktop } = breakpoints

export const SubWrapper = styled.div`
    text-align: center;
    margin-top: 24px;

    span {
        color: #d0d6f9;
    }

    @media (min-width: ${tablet}) {
        width: 100%;
        text-align: start;
        margin-top: 40px;
    }

    @media (min-width: ${desktop}) {
        margin-bottom: 88px;
        margin-top: 48px;
    }
`
