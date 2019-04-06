import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

class Gallery extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Wrap>
        <h2>Products Gallery</h2>
      </Wrap>
    )
  }

}
export default Gallery
