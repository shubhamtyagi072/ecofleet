import React from 'react'
import styled from 'styled-components'
import Image from './Image.jpeg'
import Image2 from './Image2.jpeg'
import FlexGrid from '@tds/core-flex-grid'
import { colorTelusPurple, colorAthensGrey, colorWhite } from '@tds/core-colours'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Box from '@tds/core-box'

class Header extends React.Component {
  constructor(){
    super()
    this.state={
      value:0
    }
  }
 
  componentWillMount(){
setInterval((res) => {
    this.setState({value:this.state.value+1})
  },3000)
  }
  render(){
   const WrapperGradient = styled.div({
      backgroundColor: colorAthensGrey, /* For browsers that do not support gradients */
  })
     return (
       <>
       {this.state.value % 2 == 0 ? 
            <FlexGrid>
                <FlexGrid.Row distribute="around">
                    <FlexGrid.Col xs={12} lg={12} >
                        <Box vertical={7} between={1}>
                        <h1  style={{fontFamily:"algerian",color:"green",fontSize:"62px"}} >MAKING DELIVERY GREEN</h1>
                        <p style={{fontWeight:"bold",fontSize:"22px" }}>YOUR  BEST LAST MILE DELIVERY PARTNER</p>
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={12} lg={12}>
                    <img style={{width:'80vw'}} alt="Shubahm" src={Image} />
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid> : 
            <WrapperGradient>
          <FlexGrid>
          <FlexGrid.Row distribute="between" >
              <FlexGrid.Col xs={12} lg={12}>
              
                <Box vertical={7} between={1}>
                <h1  style={{fontFamily:"algerian",color:"green",fontSize:"62px"}} >YOUR BEST PARTNER</h1>
                  </Box>
        
              </FlexGrid.Col>
              
             
          </FlexGrid.Row>
          <FlexGrid.Row distribute="between" >
              <FlexGrid.Col xs={12} lg={4}>
                <div style={{zIndex:'100'}}>
                <Box>
                  <p style={{fontWeight:"bold",fontSize:"22px" }}>We provide you cost effective and environment friendly solution for Last mile delivery</p>
                  </Box>
                </div>
              </FlexGrid.Col>
              <FlexGrid.Col xs={12} lg={8} >
              <Box vertical={2} >
                  <img   alt="Shubahm" src={Image2} />
                  </Box>
              </FlexGrid.Col>
             
          </FlexGrid.Row>
      </FlexGrid> 
      </WrapperGradient>}
      
</>
      )};
}

export default Header