import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.section`

`

class Intro extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Wrap>
        <h2>Aim for the stars ... </h2>
        <p>Working throughout many industries, Lunarworks has multi-disciplined consultants who can help your business succeed. With experience in Apps, Online Marketing and Metrics, Buzzwords to hit - no challenge is insurmountable.</p>
        <p>We can provide the expertise to blahblahblah.</p>
      </Wrap>
    )
  }

}
export default Intro
