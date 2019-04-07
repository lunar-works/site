import React, { Component } from 'react'
import styled from 'styled-components'
import { ColumnContainer, GridContainer, Content, Pod, PositionContainer } from '../../generics/containers';
import { H2, H3 } from '../../generics/headings';

const SPod = styled(Pod)`
  background:#000;
  border: 0;
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



const ServicesPod = ({title, description}) => 
  <SPod>  
    <Content>
      <H3>{title}</H3>
      <p>{description}</p>
    </Content>
  </SPod>


const Summary = () => 
  <PositionContainer
    id="services"
    style={{background:"#080808"}}
  >
    <Content>
        <H2>Our Services</H2>
        <p>WE ARE GREAT HIRE US</p>
    </Content>
    <Content>
    {services.map(item => <ServicesPod title={item.title} description={item.description} />)}
    </Content>
  </PositionContainer>

export default Summary
