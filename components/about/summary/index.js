import React, { Component } from 'react'
import styled from 'styled-components'
import { ColumnContainer, GridContainer, Content } from '../../generics/containers';
import { H2 } from '../../generics/headings';

const Summary = () => 
  <GridContainer
    id="about"
    style={{background:"#080808" ,height:"100%"}}
  >
    <ColumnContainer
      position="center">
      Some image
    </ColumnContainer>
    <ColumnContainer 
      
      position="center">
      <Content>
        <H2>Who are we?</H2>
        <p>A design, marketing and technology consultancy based in the United Kingdom. Our talented consultants work remotely, providing expert insight across the globe. We provide proven data-driven solutions to help you connect with your customers and achieve your goals.</p>
      </Content>
    </ColumnContainer>
  </GridContainer>

export default Summary
