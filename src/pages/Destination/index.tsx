import { Link, useParams } from 'react-router-dom'

import BackgroundImage from '@/components/BackgroundImage'
import SpaceHeader from '@/components/SpaceHeader'
import Container from '@/components/Container'
import SubTitle from '@/components/SubTitle'
import Text from '@/components/Text'

import bgImgMobile from '@/assets/destination/background-destination-mobile.jpg'
import bgImgTablet from '@/assets/destination/background-destination-tablet.jpg'
import bgImgDesktop from '@/assets/destination/background-destination-desktop.jpg'

import { data } from '@/data'

import { Box, ListItem, ImgWrapper, DescriptionBox, DestinationNav } from './styles'

function Destination() {
    const { destination = 'moon' } = useParams()

    const id = data.destination.findIndex((item) => item.name.toLowerCase() === destination.toLowerCase())

    const { name, description, distance, travel, images } = data.destination[id]

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
                        <DestinationNav>
                            <ul>
                                <ListItem isActive={destination.toLowerCase() === 'moon'}>
                                    <Link to='/destination/moon'>Moon</Link>
                                </ListItem>
                                <ListItem isActive={destination.toLowerCase() === 'mars'}>
                                    <Link to='/destination/mars'>Mars</Link>
                                </ListItem>
                                <ListItem isActive={destination.toLowerCase() === 'europa'}>
                                    <Link to='/destination/europa'>Europa</Link>
                                </ListItem>
                                <ListItem isActive={destination.toLowerCase() === 'titan'}>
                                    <Link to='/destination/titan'>Titan</Link>
                                </ListItem>
                            </ul>
                        </DestinationNav>

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
