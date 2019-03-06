import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

class Landing extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Wrap>
        <h1>Landing</h1>
        <Hero></Hero>
        <Products></Products>
        <Consultancy></Consultancy>
        <Connect></Connect>
      </Wrap>
    )
  }

}
export default Landing
