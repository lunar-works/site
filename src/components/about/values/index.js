import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.section`

`

class Values extends Component {

  constructor(props) {
    super(props)
  }

  render() {    
    return (
      <Wrap>
        <p>We are a multidisciplined group assembled to provide solutions to any problem. Apps, Web, Buzz words.</p>
        <p>Based remotely, we are available to your business worldwide. More things on the positives of remoteness. Pro lifestyle.</p>
      </Wrap>
    )
  }

}
export default Values
