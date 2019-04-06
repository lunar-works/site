import React, { Component } from 'react'
import {PositionContainer,Content} from '../generics/containers'
import {H1} from '../generics/headings'
import Btn from '../generics/button'

const Hero = () =>
  <PositionContainer 
    image="/static/images/flag.jpg"
    imagePos="center bottom"
    imageSize="cover"
    align="start"
  >
    <Content style={{textAlign:'center', paddingTop:'80px'}}>
      <H1>We are Lunarworks</H1>
      <p>Some shit about consultancy</p>
      <Btn type="link" href="/about">Find out more</Btn>
    </Content>
  </PositionContainer>

export default Hero
