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

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
    margin-bottom: 64px;

    @media (min-width: ${desktop}) {
        max-width: 540px;
    }
`

interface CircleProps {
    isActive: boolean;
}

export const Circle = styled.div<CircleProps>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color:  ${props => props.isActive ? '#fff' : '#979797'};

    @media (min-width: ${desktop}) {
        width: 15px;
        height: 15px;
    }
`

export const CrewNav = styled.nav`
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    @media (min-width: ${desktop}) {
       ul {
            gap: 40px;
       }
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
