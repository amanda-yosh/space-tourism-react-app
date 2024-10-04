import Container from "../../components/Container"
import SpaceHeader from "../../components/SpaceHeader"
import Text from "../../components/Text"

import bgImgMobile from '../../assets/home/background-home-mobile.jpg'
import bgImgTablet from '../../assets/home/background-home-tablet.jpg'
import bgImgDesktop from '../../assets/home/background-home-desktop.jpg'

import { Box, FlexDiv, ButtonCircle } from "./Home.styles"

function Home() {
    return (
        <Container backgroundUrl={[bgImgMobile, bgImgTablet, bgImgDesktop]}>
            <SpaceHeader />

            <FlexDiv>
                <Box>
                    <Text transform="uppercase">So, you want to travel to</Text>
                    <Text tag="h1" transform="uppercase" size="display">Space</Text>
                    <Text>
                        Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!
                    </Text>
                </Box>

                <ButtonCircle>
                    Explore
                </ButtonCircle>
            </FlexDiv>
        </Container>
    )
}

export default Home