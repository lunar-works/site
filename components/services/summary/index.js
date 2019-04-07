import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

const services = [{
  'title': 'User Experience',
  'description': 'Improve the experience of your users through consultancy or our workshops.'
},{
  'title': 'Marketing and Metrics',
  'description': 'Record and use metrics to help you get more from your marketing budget.'
},{
  'title': 'Data Analysis',
  'description': 'We can help you gather and analyse your business data to gain better insight to what’s working with your customers.'
},{
  'title': 'Brand Development',
  'description': 'Visit a branding workshop or enlist our consultants to help you develop your brand image and voice.'
},{
  'title': 'Workshops',
  'description': 'We offer a range of workshops, from Branding to Data Analysis, which can help your business grow in a number of ways.'
},{
  'title': 'Design Sprints',
  'description': 'Employ us for a design sprint to explore a business concept, or allow us to provide creative insight.'
}]

const Service = ({title, description}) => <div>
  <h3>{title}</h3>
  <p>{description}</p>
</div>

class Summary extends Component {

  constructor(props) {
    super(props)
    
  }

  renderServices() {
    return services.map(service => <Service {...service} />);
  }

  render() {    
    return (
      <Wrap>
        { this.renderServices() }
      </Wrap>
    )
  }

}
export default Summary
