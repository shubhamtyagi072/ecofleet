import React from 'react'
import styled from 'styled-components'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import Box from '@tds/core-box'
import Image from '@tds/core-image'
import Scooter from '../Assest/Scooter.jpeg'
import DelCAr from '../Assest/DelCAr.jpeg'
import { colorTelusPurple, colorAthensGrey, colorWhite } from '@tds/core-colours'
import HairlineDivider from '@tds/core-dimple-divider'
import UnorderedList from '@tds/core-unordered-list'
import Link from '@tds/core-link'

export const WrapperGradient = styled.div({
    backgroundColor: colorWhite, /* For browsers that do not support gradients */
    backgroundImage: `linear-gradient(${colorWhite}, ${colorWhite})`
})
const Header = () => {
    return (
        <WrapperGradient>
            <HairlineDivider gradient={true} />
            <FlexGrid>
            <FlexGrid.Row distribute="around">
                    <FlexGrid.Col>
                    <Box vertical={3} >
                        <h1 style={{ fontFamily: "algerian", color: "green", fontSize: "62px" }} >OUR SERVICES</h1>
                    </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row>
                    <FlexGrid.Col xs={12} lg={6}>
                        <Box between={3} vertical={7}>
                        <p style={{fontWeight:"bold",fontSize:"22px" }}>2 Wheeler EV for Light Weight Delivery</p>
                            <UnorderedList>
                                <UnorderedList.Item><p style={{fontWeight:"bold",fontSize:"18px" }}>Cost Effective Solution</p></UnorderedList.Item>
                                <UnorderedList.Item>
                                <p style={{fontWeight:"bold",fontSize:"18px" }}>No Harmful Emission</p>
  </UnorderedList.Item>
                                <UnorderedList.Item>
                                <p style={{fontWeight:"bold",fontSize:"18px" }}>Long Range</p>
  </UnorderedList.Item>
  <UnorderedList.Item>
                                <p style={{fontWeight:"bold",fontSize:"18px" }}>Fast Delivery</p>
  </UnorderedList.Item>
                            </UnorderedList>
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={12} lg={2} >
                        <Box vertical={7}>
                            <img alt="Shubahm" src={Scooter} />
                        </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row distribute="between">
                    <FlexGrid.Col xs={12} lg={2} >
                        
                    <Box vertical={7} >
                            <img alt="Shubahm" src={DelCAr} />
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={12} lg={4}>
                        <Box between={3} vertical={7} horizontal={9}>
                        <p style={{fontWeight:"bold",fontSize:"22px" }}>3 Wheeler EV for Heavy Weight Delivery</p>
                            <UnorderedList>
                                <UnorderedList.Item><p style={{fontWeight:"bold",fontSize:"18px" }}>Cost Effective Solution</p></UnorderedList.Item>
                                <UnorderedList.Item>
                                <p style={{fontWeight:"bold",fontSize:"18px" }}>No Harmful Emission</p>
  </UnorderedList.Item>
                                <UnorderedList.Item>
                                <p style={{fontWeight:"bold",fontSize:"18px" }}>Long Range</p>
  </UnorderedList.Item>
  <UnorderedList.Item>
                                <p style={{fontWeight:"bold",fontSize:"18px" }}>Fast Delivery</p>
  </UnorderedList.Item>
                            </UnorderedList>
                        </Box>
                    </FlexGrid.Col>
                    
                </FlexGrid.Row>
            </FlexGrid>
        </WrapperGradient>
    );
}

export default Header