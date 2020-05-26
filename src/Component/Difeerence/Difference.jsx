import React from 'react'
import styled from 'styled-components'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import Box from '@tds/core-box'
import { colorWhite } from '@tds/core-colours'
import HairlineDivider from '@tds/core-dimple-divider'
import Image from './Image.jpeg'

export const WrapperGradient = styled.div({
    backgroundColor: colorWhite, /* For browsers that do not support gradients */
    backgroundImage: `linear-gradient(${colorWhite}, ${colorWhite})`
})
const Header = () => {
    return (
        <WrapperGradient>
            <HairlineDivider  />
            <FlexGrid>
            <FlexGrid.Row distribute="around">
                    <FlexGrid.Col>
                    <Box vertical={3} >
                        <h1 style={{ fontFamily: "algerian", color: "green", fontSize: "62px" }} >WHAT MAKE US DIFFERENT</h1>
                    </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row distribute="around">
                    <FlexGrid.Col xs={12} lg={10} >
                        <Box vertical={7}>
                            <img  alt="Shubahm" src={Image} />
                        </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>
        </WrapperGradient>
    );
}

export default Header