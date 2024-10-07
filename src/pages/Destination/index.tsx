import Container from '@/components/Container'
import SpaceHeader from '@/components/SpaceHeader'
import SubTitle from '@/components/SubTitle/styles'
import Text from '@/components/Text'

import bgImgMobile from '@/assets/destination/background-destination-mobile.jpg'
import bgImgTablet from '@/assets/destination/background-destination-tablet.jpg'
import bgImgDesktop from '@/assets/destination/background-destination-desktop.jpg'

import { data } from '@/data'

import { Box, ImgWrapper, DescriptionBox } from './styles'

function Destination() {
    const id = 0

    return (
        <Container backgroundUrl={[bgImgMobile, bgImgTablet, bgImgDesktop]}>
            <SpaceHeader />

            <div>
                <SubTitle index='01' subtitle='Pick your destination' />

                <Box>
                    <ImgWrapper>
                        <img src={data.destination[id].images.webp} alt="" />
                    </ImgWrapper>

                    <DescriptionBox>
                        <Text size='big-plus' transform='uppercase'>{data.destination[id].name}</Text>

                        <Text>{data.destination[id].description}</Text>

                        <Text transform='uppercase'>Avg. distance</Text>
                        <Text>{data.destination[id].distance}</Text>

                        <Text transform='uppercase'>Est. travel time</Text>
                        <Text>{data.destination[id].travel}</Text>
                    </DescriptionBox>
                </Box>
            </div>
        </Container >
    )
}

export default Destination
