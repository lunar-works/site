import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

class Intro extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Wrap>
        <h2>Services Intro</h2>
      </Wrap>
    )
  }

}
export default Intro
