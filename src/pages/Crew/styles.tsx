import { styled } from 'styled-components'

import { breakpoints } from '../../utils/breakpoints'

const { tablet, desktop } = breakpoints

export const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${desktop}) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const TitleWrapper = styled.div`
    @media (min-width: ${tablet}) {
        width: 100%;
        text-align: start;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
    margin-bottom: 64px;

    div {
        margin-top: 64px;
    }

    @media (min-width: ${desktop}) {
        max-width: 540px;
    }
`

export const ImgWrapper = styled.div`
    max-height: 340px;

    img {
        max-height: 340px;
    }

    @media (min-width: ${tablet}) {
        max-height: 500px;

        img {
            max-height: 500px;
        }
    }

    @media (min-width: ${desktop}) {
        max-height: 600px;

        img {
            max-height: 600px;
        }
    }
`
