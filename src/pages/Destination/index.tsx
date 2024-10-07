import { useParams } from 'react-router-dom'

import BackgroundImage from '@/components/BackgroundImage'
import SpaceHeader from '@/components/SpaceHeader'
import Container from '@/components/Container'
import SubTitle from '@/components/SubTitle'
import Text from '@/components/Text'

import bgImgMobile from '@/assets/destination/background-destination-mobile.jpg'
import bgImgTablet from '@/assets/destination/background-destination-tablet.jpg'
import bgImgDesktop from '@/assets/destination/background-destination-desktop.jpg'

import { data } from '@/data'

import { Box, ImgWrapper, DescriptionBox } from './styles'

function Destination() {
    const { id } = useParams()
    const { name, description, distance, travel, images } = data.destination[Number(id)]

    return (
        <BackgroundImage backgroundUrl={[bgImgMobile, bgImgTablet, bgImgDesktop]}>
            <SpaceHeader />

            <Container>
                <SubTitle index='01' subtitle='Pick your destination' />

                <Box>
                    <ImgWrapper>
                        <img src={images.webp} alt="" />
                    </ImgWrapper>

                    <DescriptionBox>
                        <Text size='big-plus' transform='uppercase'>{name}</Text>

                        <Text>{description}</Text>

                        <Text transform='uppercase'>Avg. distance</Text>
                        <Text>{distance}</Text>

                        <Text transform='uppercase'>Est. travel time</Text>
                        <Text>{travel}</Text>
                    </DescriptionBox>
                </Box>
            </Container>
        </BackgroundImage >
    )
}

export default Destination
