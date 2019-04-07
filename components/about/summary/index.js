import React, { Component } from 'react'
import styled from 'styled-components'
import { ColumnContainer, GridContainer, Content } from '../../generics/containers';
import { H2 } from '../../generics/headings';

const Summary = () => 
  <GridContainer
    id="about"
    style={{background:"#01010F" ,height:"100%"}}
  >
    <ColumnContainer
      position="center">
      <img src="/static/images/window.png" height="80%" style={{objectFit: "contain", margin:"1rem"}}/>
    </ColumnContainer>
    <ColumnContainer 
      align="center"
      position="center">
      <Content style={{width: "80%"}}>
        <H2>Who are we?</H2>
        <p>A design, marketing and technology consultancy based in the United Kingdom. Our talented consultants work remotely, providing expert insight across the globe. We provide proven data-driven solutions to help you connect with your customers and achieve your goals.</p>
        <a href="/about">Read more about us <i className="fa fa-long-arrow-right " /></a>
      </Content>
    </ColumnContainer>
  </GridContainer>

export default Summary
