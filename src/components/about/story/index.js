import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

class Story extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Wrap>
        <h2>About Story</h2>
      </Wrap>
    )
  }

}
export default Story
