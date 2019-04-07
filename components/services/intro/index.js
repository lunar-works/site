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
        <p>Working throughout many industries, Lunarworks has multi-disciplined consultants who can help your business succeed. With experience in Branding, Design, Online Marketing and Metrics, and so much more, no challenge is insurmountable.</p>
        <p>We provide the expertise to help you develop ideas, offer detailed insight, and give an honest unbiased perspective on every project we interact with.</p>
      </Wrap>
    )
  }

}
export default Intro
