import React from 'react'
import styled from 'styled-components'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import Box from '@tds/core-box'
import { colorWhite } from '@tds/core-colours'
import HairlineDivider from '@tds/core-dimple-divider'


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
                    <FlexGrid.Col xs={12} >
                        <Box vertical={3} horizontal={1}>
                        <h1  style={{fontFamily:"algerian",color:"green",fontSize:"62px"}} >CONTACT US</h1>

                        </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row distribute="around">
                    <FlexGrid.Col xs={12} lg={8} >
                        <Box vertical={7} between={5}>
                        <p style={{fontWeight:"bold",fontSize:"22px" }}>ECO FLEET PVT LTD</p>
                        <p style={{fontWeight:"bold",fontSize:"22px" }}>Registered Office- First Floor KA- 177, Sec- 12, Pratap Vihar, Ghaziabad , Uttar Pradesh , 201009</p>
                        <Box between={2}>
                        <p style={{fontWeight:"bold",fontSize:"22px" }}>Contact person’s</p>
                        <Box>
                        <p style={{fontWeight:"bold",fontSize:"22px" }}>Akshay Kumar</p>
                        <p style={{fontWeight:"bold",fontSize:"22px" }}>Phone No. – 9650183931,9552127835</p>
                        </Box>
                        <Box>
                        <p style={{fontWeight:"bold",fontSize:"22px" }}>Neeraj Tiwari</p>
                        <p style={{fontWeight:"bold",fontSize:"22px" }}>Phone No. – 9555491904</p>
                        <Box vertical={2}>
                        <p style={{fontWeight:"bold",fontSize:"22px" }}>Email-id - info@weecofleet.com</p>
                        </Box>
                       
                        </Box>
                        </Box>
                        
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={12} lg={4}>
                   
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>
        </WrapperGradient>
    );
}

export default Header