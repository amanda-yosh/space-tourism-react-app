import { useState } from 'react'
import { Link } from 'react-router-dom'

import spaceLogo from '@/assets/shared/logo.svg'
import closeIcon from '@/assets/shared/icon-close.svg'
import menuIcon from '@/assets/shared/icon-hamburger.svg'

import {
    SpaceHeaderBar,
    SpaceHeaderMenu,
    SpaceHeaderMenuList,
    SpaceHeaderMenuClose,
    SpaceHeaderLogoWrapper,
} from './styles'

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
                        <Link to='/'><span>00</span> Home</Link>
                    </li>
                    <li>
                        <Link to='/destination/0'><span>01</span> Destination</Link>
                    </li>
                    <li>
                        <Link to='/crew/0'><span>02</span> Crew</Link>
                    </li>
                    <li>
                        <Link to="/technology/0"><span>03</span> Technology</Link>
                    </li>
                </SpaceHeaderMenuList>
            </SpaceHeaderMenu>
        </header>
    )
}

export default SpaceHeader
