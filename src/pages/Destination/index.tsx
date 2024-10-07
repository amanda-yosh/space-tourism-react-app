import { useParams } from 'react-router-dom'

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
    const { id } = useParams()
    const { name, description, distance, travel, images } = data.destination[Number(id)]

    return (
        <Container backgroundUrl={[bgImgMobile, bgImgTablet, bgImgDesktop]}>
            <SpaceHeader />

            <div>
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
            </div>
        </Container >
    )
}

export default Destination
