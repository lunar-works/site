import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../../generics/button';

const Wrap = styled.div`

`

class Cta extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Wrap>
        <p>How can we help your business?</p>
        <Button type="link">See What We Do</Button>
      </Wrap>
    )
  }

}
export default Cta
