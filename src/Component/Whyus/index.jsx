import React from 'react'
import styled from 'styled-components'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import Box from '@tds/core-box'
import Image from '@tds/core-image'
import { colorTelusPurple, colorAthensGrey, colorWhite } from '@tds/core-colours'
import HairlineDivider from '@tds/core-dimple-divider'
import UnorderedList from '@tds/core-unordered-list'
import Link from '@tds/core-link'
import Wallet from '../Assest/Wallet.jpeg'
import Car from '../Assest/econo.jpeg'
import Fast from '../Assest/Fast.jpeg'
import Green from '../Assest/Green.jpeg'
import Money from '../Assest/Money.jpeg'
import RunCar from '../Assest/RunCar.jpeg'

export const WrapperGradient = styled.div({
    backgroundColor: colorWhite, /* For browsers that do not support gradients */
    backgroundImage: `linear-gradient(${colorWhite}, ${colorWhite})`
})
const Header = () => {
    return (
        <WrapperGradient>
            <HairlineDivider  />
            <FlexGrid>
                <FlexGrid.Row>
                    <FlexGrid.Col>
                    <Box vertical={3} >
                        <h1 style={{ fontFamily: "algerian", color: "green", fontSize: "62px" }} >WHY US</h1>
                    </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row>
                    <FlexGrid.Col xs={12} lg={4} >
                        <Box vertical={7}>
                            <img alt="Shubahm" src={Green} />
                           <Box horizontal={3}><Heading level="h3">Promoting Green India</Heading></Box> 
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={12} lg={4} >
                        <Box vertical={7}>
                        <img alt="Shubahm" src={Wallet} />
                            <Heading level="h3">No Harmful Emission</Heading>
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={12} lg={4} >
                        <Box vertical={5}>
                        <img style={{width:"21vw"}} alt="Shubahm" src={Car} />
                            <Heading level="h3">Cost Effective Solution</Heading>
                        </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row>
                    <FlexGrid.Col xs={12} lg={4} >
                        <Box vertical={7}>
                        <img alt="Shubahm" src={Money} />
                            <Heading level="h3">Rising Cost of Fossil Fuel</Heading>
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={12} lg={4} >
                        <Box vertical={7}>
                        <img  alt="Shubahm" src={Fast} />
                        <Box horizontal={6}> <Heading level="h3">Fast Delivery</Heading></Box>
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={12} lg={4} >
                        <Box vertical={7}>
                        <img  alt="Shubahm" src={RunCar} />
                            <Heading level="h3">Sustainable Transport Using EV</Heading>
                        </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>
        </WrapperGradient>
    );
}

export default Header