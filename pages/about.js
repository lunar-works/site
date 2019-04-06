import React, { Component } from 'react'
import styled from 'styled-components'

import Story from '../components/about/story'
import Companies from '../components/about/companies'
import Values from '../components/about/values'
import Cta from '../components/about/cta'
import Layout from '../components/layout'

class Landing extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Layout>
          <h1>About</h1>

          <Story />
          <Companies />
          <Values />
          <Cta />

      </Layout>
    )
  }

}
export default Landing
