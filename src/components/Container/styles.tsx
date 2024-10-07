import { styled } from "styled-components";

import { breakpoints } from '../../utils/breakpoints'

const { tablet, desktop } = breakpoints

export const ContainerWrapper = styled.div`
    padding: 24px;

    @media (min-width: ${tablet}) {
        padding: 40px;
    }

    @media (min-width: ${desktop}) {
        padding: 48px 165px;
    }
`
