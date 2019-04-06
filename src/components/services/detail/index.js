import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

const Services = [{
  title: 'Example 1',
  description: 'Description of the service'
},{
  title: 'Example 2',
  description: 'Description of the service'
},{
  title: 'Example 3',
  description: 'Description of the service'
},{
  title: 'Example 4',
  description: 'Description of the service'
},{
  title: 'Example 5',
  description: 'Description of the service'
},{
  title: 'Example 6',
  description: 'Description of the service'
}]

const Service = ({title, description}) => <div>
  <h3>{title}</h3>
  <p>{description}</p>
</div>

class Detail extends Component {

  constructor(props) {
    super(props)
    
  }

  renderServices() {
    return Services.map((service) => <Service {...service} />)
  }

  render() {    
    return (
      <Wrap>
        { this.renderServices() }
      </Wrap>
    )
  }

}
export default Detail
