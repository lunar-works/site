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
        <p><b>We are Lunarworks</b>, a design, marketing and technology consultancy based in the United Kingdom. Our talented consultants work remotely, providing expert insight across the globe. We provide proven data-driven solutions to help you connect with your customers and achieve your goals.</p>
      </Wrap>
    )
  }

}
export default Summary
