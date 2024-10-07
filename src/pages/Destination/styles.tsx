import { styled } from "styled-components";

import { breakpoints } from '../../utils/breakpoints'

const { tablet, desktop } = breakpoints

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (min-width: ${tablet}) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const DescriptionBox = styled.div`
    @media (min-width: ${tablet}) {
        max-width: 514px;
    }
`

export const DestinationNav = styled.nav`
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;
    }
`

export const ImgWrapper = styled.div`
    max-width: 150px;

    img {
        max-width: 150px;
    }

    @media (min-width: ${tablet}) {
        max-width: 300px;

        img {
            max-width: 300px;
        }
    }

    @media (min-width: ${desktop}) {
        max-width: 480px;

        img {
            max-width: 480px;
        }
    }
`