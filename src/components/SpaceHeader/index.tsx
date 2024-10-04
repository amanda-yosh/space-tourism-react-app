import { useState } from 'react'

import spaceLogo from '../../assets/shared/logo.svg'
import closeIcon from '../../assets/shared/icon-close.svg'
import menuIcon from '../../assets/shared/icon-hamburger.svg'

import {
    SpaceHeaderBar,
    SpaceHeaderMenu,
    SpaceHeaderMenuList,
    SpaceHeaderMenuClose,
    SpaceHeaderLogoWrapper,
    SpaceHeaderMenuListLink,
} from './SpaceHeader.styles'

function SpaceHeader() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <header className='space-header'>
            <SpaceHeaderBar>
                <SpaceHeaderLogoWrapper href="/">
                    <img src={spaceLogo} alt="Space Logo" />
                </SpaceHeaderLogoWrapper>

                <div onClick={() => setMenuIsOpen(true)}>
                    <img src={menuIcon} alt="Abrir menu lateral" />
                </div>
            </SpaceHeaderBar>

            <SpaceHeaderMenu menuIsOpen={menuIsOpen}>
                <SpaceHeaderMenuClose onClick={() => setMenuIsOpen(false)}>
                    <img src={closeIcon} alt="Fechar menu lateral" />
                </SpaceHeaderMenuClose>

                <SpaceHeaderMenuList>
                    <li>
                        <SpaceHeaderMenuListLink href="/">
                            <span>00</span> Home
                        </SpaceHeaderMenuListLink>
                    </li>
                    <li>
                        <SpaceHeaderMenuListLink href="/destination">
                            <span>01</span> Destination
                        </SpaceHeaderMenuListLink>
                    </li>
                    <li>
                        <SpaceHeaderMenuListLink href="/crew">
                            <span>02</span> Crew
                        </SpaceHeaderMenuListLink>
                    </li>
                    <li>
                        <SpaceHeaderMenuListLink href="/technology">
                            <span>03</span> Technology
                        </SpaceHeaderMenuListLink>
                    </li>
                </SpaceHeaderMenuList>
            </SpaceHeaderMenu>
        </header>
    )
}

export default SpaceHeader
