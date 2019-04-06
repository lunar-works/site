import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

class Summary extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Wrap>
        <h2>Products Summary</h2>
      </Wrap>
    )
  }

}
export default Summary
