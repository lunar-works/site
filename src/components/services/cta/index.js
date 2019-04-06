import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../../generics/button';

const Wrap = styled.section`

`

class Cta extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Wrap>
        <p>What can we do for your business?</p>
        <Button type="link">Let us know</Button>
      </Wrap>
    )
  }

}
export default Cta
