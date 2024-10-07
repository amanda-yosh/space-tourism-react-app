import { useParams } from 'react-router-dom'

import Container from '@/components/Container'
import SpaceHeader from '@/components/SpaceHeader'
import SubTitle from '@/components/SubTitle/styles'
import Text from '@/components/Text'

import bgImgMobile from '@/assets/technology/background-technology-mobile.jpg'
import bgImgTablet from '@/assets/technology/background-technology-tablet.jpg'
import bgImgDesktop from '@/assets/technology/background-technology-desktop.jpg'

import { data } from '@/data'

import { Box, FlexDiv, ImgWrapper } from './styles'

function Technology() {
    const { id } = useParams()
    const { name, description, images } = data.technology[Number(id)]

    return (
        <Container backgroundUrl={[bgImgMobile, bgImgTablet, bgImgDesktop]}>
            <SpaceHeader />

            <div>
                <SubTitle index='03' subtitle='Space Launch 101' />

                <FlexDiv>
                    <ImgWrapper>
                        <img src={images.landscape} alt="" />
                    </ImgWrapper>

                    <Box>
                        <Text transform='uppercase'>The terminology...</Text>

                        <Text size='big-plus' transform='uppercase'>{name}</Text>

                        <Text>{description}</Text>
                    </Box>
                </FlexDiv>
            </div>
        </Container>
    )
}

export default Technology
