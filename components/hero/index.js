import React, { Component } from 'react'
import styled from 'styled-components'
import {PositionContainer,Content} from '../generics/containers'
import {H1} from '../generics/headings'
import Btn from '../generics/button'

const Banner = styled(PositionContainer)`
  @media(max-width:649px){
    background-size:200%;
  }
  @media(min-height:812px){
    background-size:260%;
  }
`

const BannerContent = styled(Content)`
  text-align:center;
  padding-top:100px;
  h1{
    line-height:2.3rem;
  }
  p{
    text-transform:uppercase; 
    letter-spacing:0.095rem;
  }
  @media(min-height:812px){
    padding-top:150px
  }
`

const Hero = (props) =>
  <Banner 
    image="/static/images/flag2.jpg"
    imagePos="center bottom"
    imageSize="cover"
    align="start"
  >
    <BannerContent>
      <H1> We are Lunarworks</H1>
      <p >Design, marketing and technology consultancy.</p>
      <Btn type="link" href="#about">Find out more</Btn>
    </BannerContent>
  </Banner>

export default Hero
