import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.section`

`

const CompanyList = [{
  name: 'Name #1',
  image: '/assets/images/companies/1.jpg'
},{
  name: 'Name #2',
  image: '/assets/images/companies/2.jpg'
}]

const Company = ({name, image}) => {
  return(
    <div>
      <img src={image} alt={name} />
    </div>
  )
}

class Companies extends Component {

  constructor(props) {
    super(props)
    
  }

  renderCompanies() {
    return CompanyList.map((company) => <Company {...company} />)
  }

  render() {    
    return (
      <Wrap>
        { this.renderCompanies }
      </Wrap>
    )
  }

}
export default Companies
