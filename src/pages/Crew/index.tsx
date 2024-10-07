import { useParams } from 'react-router-dom'

import SpaceHeader from '@/components/SpaceHeader'
import BackgroundImage from '@/components/BackgroundImage'
import Container from '@/components/Container'
import SubTitle from '@/components/SubTitle'
import Text from '@/components/Text'

import bgImgMobile from '@/assets/crew/background-crew-mobile.jpg'
import bgImgTablet from '@/assets/crew/background-crew-tablet.jpg'
import bgImgDesktop from '@/assets/crew/background-crew-desktop.jpg'

import { data } from '@/data'

import { Box, FlexDiv, ImgWrapper } from './styles'

function Crew() {
    const { id } = useParams()
    const idNumber = Number(id)

    return (
        <BackgroundImage backgroundUrl={[bgImgMobile, bgImgTablet, bgImgDesktop]}>
            <SpaceHeader />

            <Container>
                <FlexDiv>
                    <Box>
                        <SubTitle index='02' subtitle='Meet your crew' />

                        <div>
                            <Text size='big' tag='h1' transform='uppercase'>{data.crew[idNumber].role}</Text>
                            <Text size='big-plus' transform='uppercase'>{data.crew[idNumber].name}</Text>
                        </div>

                        <Text>{data.crew[idNumber].bio}</Text>
                    </Box>

                    <ImgWrapper>
                        <img src={data.crew[idNumber].images.webp} alt="" />
                    </ImgWrapper>
                </FlexDiv>
            </Container>
        </BackgroundImage>
    )
}

export default Crew
