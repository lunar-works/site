import React, { Component } from 'react'
import styled from 'styled-components'

import Story from '../../components/about/story'
import Companies from '../../components/about/companies'
import Values from '../../components/values'
import Cta from '../../components/cta'

const Wrap = styled.div`

`

class Landing extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Wrap>
          <h1>About</h1>

          <Story />
          <Companies />
          <Values />
          <Cta />

      </Wrap>
    )
  }

}
export default Landing
