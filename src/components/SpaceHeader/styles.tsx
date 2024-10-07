import styled from 'styled-components'

import { breakpoints } from '@/utils/breakpoints'

const { tablet } = breakpoints

interface SpaceHeaderMenuProps {
    menuIsOpen: boolean;
}

export const SpaceHeaderBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
`

export const SpaceHeaderLogoWrapper = styled.a`
    max-height: 40px;

    img {
        max-height: 40px;
    }
`

export const SpaceHeaderMenu = styled.nav<SpaceHeaderMenuProps>`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70vw;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 48px; 
    background-color: rgba(255,255,255, 0.05);
    backdrop-filter: blur(50px);
    transition: transform .5s ease-in-out; 
    transform: ${props => (props.menuIsOpen ? 'translateX(0)' : 'translateX(100%)')};

    @media (min-width: ${tablet}) {
        max-height: 40px;
        width: auto;
        flex-direction: row;
        transform: none;
    }
`

export const SpaceHeaderMenuClose = styled.div`
    display: flex;
    justify-content: end;

    @media (min-width: ${tablet}) {
        display: none;
    }
`

export const SpaceHeaderMenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;

    a {
        text-transform: uppercase;
    }

    span {
        color: #d0d6f9;
        font-weight: 700;
    }

    @media (min-width: ${tablet}) {
        flex-direction: row;
        align-items: center;
    }
`
