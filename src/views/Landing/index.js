import React, { Component } from 'react'
import styled from 'styled-components'

import Hero from '../../components/hero'
import About from '../../components/about/summary'
import Services from '../../components/services/summary'
import Connect from '../../components/social'

const Wrap = styled.div`

`

class Landing extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Wrap>
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <Connect></Connect>
      </Wrap>
    )
  }

}
export default Landing
