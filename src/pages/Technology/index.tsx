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
    const id = 0

    return (
        <Container backgroundUrl={[bgImgMobile, bgImgTablet, bgImgDesktop]}>
            <SpaceHeader />

            <div>
                <SubTitle index='03' subtitle='Space Launch 101' />

                <FlexDiv>
                    <ImgWrapper>
                        <img src={data.technology[id].images.landscape} alt="" />
                    </ImgWrapper>

                    <Box>
                        <Text transform='uppercase'>The terminology...</Text>

                        <Text size='big-plus' transform='uppercase'>{data.technology[id].name}</Text>

                        <Text>{data.technology[id].description}</Text>
                    </Box>
                </FlexDiv>
            </div>
        </Container>
    )
}

export default Technology
