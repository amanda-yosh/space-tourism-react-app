import { styled } from 'styled-components'

import { breakpoints } from '../../utils/breakpoints'

const { tablet, desktop } = breakpoints

export const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

    @media (min-width: ${tablet}) {
        margin-top: 88px;
    }

    @media (min-width: ${desktop}) {
        margin-top: 124px;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const Box = styled.div`
    max-width: 512px;
    text-align: center;

    @media (min-width: ${desktop}) {
        text-align: start;
    }
`

export const ButtonCircle = styled.button`
    width: 144px;
    min-width: 144px;
    height: 144px;
    border-radius: 50%;
    border: none;
    background-color: #fff;
    color: #000;
    margin-top: 120px;
    text-transform: uppercase;

    @media (min-width: ${tablet}) {
        width: 272px;
        min-width: 272px;
        height: 272px;
    }
`
