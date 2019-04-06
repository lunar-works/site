import React, { Component } from 'react'
import styled from 'styled-components'

import Intro from '../../components/services/intro'
import Detail from '../../components/services/detail'
import Cta from '../../components/services/cta'

const Wrap = styled.div`

`

class Services extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <Wrap>
          <h1>Services</h1>
          <Intro />
          <Detail />
          <Cta />
      </Wrap>
    )
  }

}
export default Services
