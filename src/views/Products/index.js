import React, { Component } from 'react'
import styled from 'styled-components'

import Intro from '../../components/products/intro'
import Gallery from '../../components/products/gallery'

const Wrap = styled.div`

`

class Landing extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <Wrap>
          <h1>Products</h1>
          <Intro />
          <Gallery />
      </Wrap>
    )
  }

}
export default Landing
