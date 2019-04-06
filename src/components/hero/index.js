import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

class Hero extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Wrap>
        <h2>Hero</h2>
      </Wrap>
    )
  }

}
export default Hero
