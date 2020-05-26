import React from 'react'
import styled from 'styled-components'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import Box from '@tds/core-box'
import { colorWhite } from '@tds/core-colours'
import HairlineDivider from '@tds/core-dimple-divider'
import Image from './Image.jpeg'
import Image1 from './Image1.jpeg'
import Image3 from './Image3.jpeg'

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
                    <FlexGrid.Col xs={12} lg={6} >
                        <Box vertical={7} between={5}>
                        <h1  style={{fontFamily:"algerian",color:"green",fontSize:"62px"}} >OUR PRESENCE</h1>
                        <p style={{fontWeight:"bold",fontSize:"22px" }}>Now, we are working only in Delhi NCR , But shortly we will expand our services to other cities</p>
                        <img  style={{width:"30vw"}} alt="Shubahm" src={Image1} />
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={12} lg={6}>
                        <Box vertical={7}>
                        <img style={{position:"absolute"}}  alt="Shubahm" src={Image} />
                        <img  style={{position:"relative",top:"140px",left:"160px"}}alt="Shubahm" src={Image3} />
                        </Box>
                    
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>
        </WrapperGradient>
    );
}

export default Header