import React, { Component } from 'react'
import styled from 'styled-components'
import { ColumnContainer, GridContainer, Content, Pod, PositionContainer } from '../../generics/containers';
import { H2, H3 } from '../../generics/headings';

const SPod = styled(Pod)`
  background:#fff;
  border: 0;
  border-radius:4px;
  margin: 0;
  box-shadow: 0px 10px 10px #dedede;
  color: #424770;
  h3{
    color:#000;
    font-size:1.4rem;
    font-weight: normal;
  }
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
}
//,{
//   'title': 'Workshops',
//   'description': 'We offer a range of workshops, from Branding to Data Analysis, which can help your business grow in a number of ways.'
// },{
//   'title': 'Design Sprints',
//   'description': 'Employ us for a design sprint to explore a business concept, or allow us to provide creative insight.'
// }
]



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
    style={{background:"#f1f1f1"}}
    column="column"
  >
      <Content style={{textAlign:"center", maxWidth: "50%"}}>
        <H2 style={{color:"#000"}}>Our Services</H2>
        <p style={{color: "#424770"}}>A design, marketing and technology consultancy based in the United Kingdom. Our talented consultants work remotely, providing expert insight across the globe. We provide proven data-driven solutions to help you connect with your customers and achieve your goals.</p>
        <a href="/services">Read more</a>
      </Content>
      <div style={{
        display:"grid",
        padding: "2rem",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "20px",
        maxWidth: "80%"
      }}>
        {services.map(item => <ServicesPod title={item.title} description={item.description} />)}
      </div>
      <PositionContainer>
          Get in touch with us
          <a href="/services">Read more</a>
      </PositionContainer>
  </PositionContainer>

export default Summary
