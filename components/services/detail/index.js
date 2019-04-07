import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

const Services = [{
  title: 'User Experience',
  description: [
    'How a user experiences your business and products is vital to its success - it’s the frontline interaction between you and your customers.',
    'Consider our workshops and consultancy to improve user experience across your business and product'
  ] 
},{
  title: 'SEO',
  description: [
    'As the life and blood of visibility online, SEO is responsible for potential customers becoming customers.',
    'Enlist us to analyse your existing SEO level, and provide you with a plan to improve this.'
  ]
},{
  title: 'Marketing and Metrics',
  description: [
    'It’s common for small and growing businesses to overspend or ineffectually spend in marketing. We can show you how to use data and increase your data collection to improve your marketing strategy.'
  ]
},{
  title: 'Data Analysis',
  description: [
    'Data is valuable to enable any business to understand their customers.',
    'Learn how to better use your data to improve content strategy, branding, and interactions with your customer.'
  ]
},{
  title: 'Brand Development',
  description: [
    'When growing, it’s easy for your brand to be forgotten, but it’s vital for improving churn and long term customer loyalty.',
    'Have us help you with brand definition, providing our expertise to develop your........................'
  ]
},{
  title: 'Workshops',
  description: [
    'paragraph',
    '[aragraph'
  ]
},{
  title: 'Design Sprints',
  description: [
    'Enlist us in a design sprint to provide you with a proof of concept for a business idea.',
    'With our history of concept work we offer experienced and results driven insight in design sprints, helping you to evaluate ideas worth persuing without the risk.'
  ]
},{
  title: 'Development',
  description: [
    'All of our consultants are multi-disciplined and have senior development backgrounds. We can provide development services for short and medium term projects to allow you to develop an idea, aid your core developers, or gain experience your team doesn’t already have.'
  ]
}]

const Service = ({title, description}) => <div>
  <h3>{title}</h3>
  { description.map(paragraph => <p>{paragraph}</p>) }
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
