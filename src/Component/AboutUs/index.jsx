import React from 'react'
import styled from 'styled-components'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import Box from '@tds/core-box'

import ImageLogo from './WhatsApp.jpeg'
import Image from '@tds/core-image'
import DisplayHeading from '@tds/core-display-heading'
import {colorTelusPurple,colorAthensGrey,colorWhite} from '@tds/core-colours'
import HairlineDivider from '@tds/core-dimple-divider'
import UnorderedList from '@tds/core-unordered-list'

export const WrapperGradient = styled.div({
    backgroundColor: colorWhite, /* For browsers that do not support gradients */
  backgroundImage: `linear-gradient(${colorWhite}, ${colorWhite})`
  })
const Header = () => {
     return (
         <WrapperGradient>
              <HairlineDivider gradient={true} />
      <FlexGrid>
          <FlexGrid.Row >
              <FlexGrid.Col xs={12} lg={7}>
                  <Box between={6} vertical={7}>
               <h1  style={{fontFamily:"algerian",color:"green",fontSize:"62px"}} >ABOUT US</h1>
               <p style={{fontWeight:"bold",fontSize:"22px" }}>We at ECO FLEET, are one of a kind Green Mobility Solution provider  for individuals and Corporates. Who wants to contribute to develop Green Mobility for the betterment of Environment through reduction of carbon emission.</p>
               </Box>
              </FlexGrid.Col>
              <FlexGrid.Col xs={12} lg={4} lgoffset={1}>
                  <Box vertical={7}>
                  <img style={{width:"40vw"}}  src={ImageLogo}/>
                  </Box>
              </FlexGrid.Col>
          </FlexGrid.Row>
      </FlexGrid>
      </WrapperGradient>
      );
}

export default Header