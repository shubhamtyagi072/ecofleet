import React from 'react'
import styled from 'styled-components'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import Box from '@tds/core-box'
import Image from '@tds/core-image'
import { colorTelusPurple, colorAthensGrey, colorWhite } from '@tds/core-colours'
import HairlineDivider from '@tds/core-hairline-divider'
import UnorderedList from '@tds/core-unordered-list'
import Link from '@tds/core-link'
import Image1 from './Image1.jpeg'
import Image2 from './Image2.jpeg'
import Image3 from './Image3.jpeg'
import Image4 from './Image4.jpeg'
import Image5 from './Image5.jpeg'

export const WrapperGradient = styled.div({
    backgroundColor: colorWhite, /* For browsers that do not support gradients */
    backgroundImage: `linear-gradient(${colorWhite}, ${colorWhite})`
})
const Header = () => {
    return (
        <WrapperGradient>
            <HairlineDivider gradient={true} />
            <FlexGrid>
                <FlexGrid.Row>
                    <FlexGrid.Col xs={12} >
                        <Box vertical={3} horizontal={4}>
                        <h1  style={{fontFamily:"algerian",color:"green",fontSize:"62px"}} >AVAILABLE FOR</h1>

                        </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row>
                    <FlexGrid.Col xs={12} lg={4} >
                    <Box vertical={7}>
                            <Image alt="Shubahm" src={Image3} />
                            <Box horizontal={5}> <h1 style={{textAlign:"center",fontWeight:"bold" ,fontSize:"20px"}} >Ecommerce Delivery</h1></Box>
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={12} lg={4} >
                        <Box vertical={7}>
                            <Image alt="Shubahm" src={Image2} />
                            <Box horizontal={4}> <Heading level="h3">Last Mile Logistics Delivery</Heading></Box>
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={12} lg={4} >
                    <Box vertical={7}>
                            <Image alt="Shubahm" src={Image1} />
                            <Box horizontal={4}> <Heading level="h3">Online Grocery Delivery</Heading></Box>
                        </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row distribute="around">
                    <FlexGrid.Col xs={12} lg={4} >
                        <Box vertical={7}>
                            <Image alt="Shubahm" src={Image4} />
                            <Box horizontal={4}> <Heading level="h3">Online Food Delivery</Heading></Box>
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={12} lg={4}  >
                        <Box vertical={7}>
                            <Image alt="Shubahm" src={Image5} />
                            <Box horizontal={5}> <Heading level="h3">Online Pharmacy Delivery</Heading></Box>
                        </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>
        </WrapperGradient>
    );
}

export default Header