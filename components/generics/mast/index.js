import React from 'react'
import styled, {css} from 'styled-components'

const positions = {
    top: `
        top: 0;
        bottom: auto;
        left: auto;
        width:100%;
    `,
    sidebar: `
        bottom: auto;
        top: auto;
        left: 0;
        width: auto;
        height:100%;
        flex-direction: column;
        justify-content: start;
        nav ul{
            display:flex;
            flex-direction: column;
            li{
                margin-top: 0.3rem;
            }
        }
    `,
    bottom: `
        bottom: 0;
        top: auto;
        left: auto;
        width:100%;
    `
}

export const mastBase = css`
    display:flex;
    align-items: center;
    position:fixed;
    padding:1rem;
    width:100%;
    box-sizing: border-box;
    background: ${props => props.theme.mast.background};
    justify-content: space-between;
    top:0;
    nav ul{
        display:flex;
        flex-direction: row;
    }
    ${props => props.layouts.map(item => `
        @media(min-width: ${item['transform-at']}){
            ${positions[item['transform-position']]}
        }
    `)}
`

const Mast = styled.div`
    ${mastBase}
`

export default ({layouts = [], children}) => 
    <Mast layouts={layouts}>
        {children}
    </Mast>