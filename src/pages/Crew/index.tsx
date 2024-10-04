import { useParams } from 'react-router-dom'

import SpaceHeader from '../../components/SpaceHeader'
import Container from '../../components/Container'
import Text from '../../components/Text'

import bgImgMobile from '../../assets/crew/background-crew-mobile.jpg'
import bgImgTablet from '../../assets/crew/background-crew-tablet.jpg'
import bgImgDesktop from '../../assets/crew/background-crew-desktop.jpg'

import { data } from '../../data'

import { Box, FlexDiv, ImgWrapper, TitleWrapper } from './styles'

function Crew() {
    const { id } = useParams()
    const idNumber = Number(id)

    return (
        <Container backgroundUrl={[bgImgMobile, bgImgTablet, bgImgDesktop]}>
            <SpaceHeader />

            <FlexDiv>
                <Box>
                    <TitleWrapper>
                        <Text tag='h2' transform='uppercase'><span>02</span> Meet your crew</Text>
                    </TitleWrapper>

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
    )
}

export default Crew
