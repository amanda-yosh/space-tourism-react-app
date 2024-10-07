import { Link, useParams } from 'react-router-dom'

import SpaceHeader from '@/components/SpaceHeader'
import BackgroundImage from '@/components/BackgroundImage'
import Container from '@/components/Container'
import SubTitle from '@/components/SubTitle'
import Text from '@/components/Text'

import bgImgMobile from '@/assets/crew/background-crew-mobile.jpg'
import bgImgTablet from '@/assets/crew/background-crew-tablet.jpg'
import bgImgDesktop from '@/assets/crew/background-crew-desktop.jpg'

import { data } from '@/data'

import { Box, Circle, CrewNav, FlexDiv, ImgWrapper } from './styles'

function Crew() {
    const { id } = useParams()
    const numberId = Number(id)
    const { role, name, bio, images: { webp } } = data.crew[numberId]

    return (
        <BackgroundImage backgroundUrl={[bgImgMobile, bgImgTablet, bgImgDesktop]}>
            <SpaceHeader />

            <Container>
                <FlexDiv>
                    <Box>
                        <SubTitle index='02' subtitle='Meet your crew' />

                        <div>
                            <Text size='big' tag='h1' transform='uppercase'>{role}</Text>
                            <Text size='big-plus' transform='uppercase'>{name}</Text>
                        </div>

                        <Text>{bio}</Text>

                        <CrewNav>
                            <ul>
                                <li>
                                    <Link to='/crew/0'>
                                        <Circle isActive={numberId === 0} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/crew/1'>
                                        <Circle isActive={numberId === 1} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/crew/2'>
                                        <Circle isActive={numberId === 2} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/crew/3'>
                                        <Circle isActive={numberId === 3} />
                                    </Link>
                                </li>
                            </ul>
                        </CrewNav>
                    </Box>

                    <ImgWrapper>
                        <img src={webp} alt="" />
                    </ImgWrapper>
                </FlexDiv>
            </Container>
        </BackgroundImage>
    )
}

export default Crew
