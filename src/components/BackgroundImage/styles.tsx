import styled from 'styled-components'

import { breakpoints } from '@/utils/breakpoints'

const { tablet, desktop } = breakpoints

interface BackgroundImageWrapperProps {
    backgroundUrl: Array<string>;
}

export const BackgroundImageWrapper = styled.div<BackgroundImageWrapperProps>`
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    background-image: ${props => `url(${props.backgroundUrl[0]})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: pink;

    @media (min-width: ${tablet}) {
        background-image: ${props => `url(${props.backgroundUrl[1]})`};
    }

    @media (min-width: ${desktop}) {
        background-image: ${props => `url(${props.backgroundUrl[2]})`};
    }
`
