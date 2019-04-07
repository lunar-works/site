
import React,{Children} from 'react'
import styled, {css} from 'styled-components'


export const PrimaryNavBase = css`
    ul {
        margin:0;
        padding:0;
        list-style:none;
        display:flex;
        ${props => props.position === "top"
        ?  `
            flex-direction: row;
        `
        : `flex-direction:column;`
    }
    li{
        margin-left: 1rem;
    }
    a{ 
        color: #fff;
        opacity: 0.7;
        &:hover {
            opacity:1;
        }
        font-weight: normal;
        position:relative;
        &.active {
            opacity:1;
        }
        &.active:after {
            content: '';
            width: 5px;
            height: 5px;
            position: absolute;
            bottom: -45%;
            background: #1c93e7;
            border-radius: 100px;
            left: 50%;
        }
    }
    li{
        ${props => props.position === "top"
        ?  `
            margin-left: 2rem;
        `
        : ``
    }
`

const PrimaryNav = styled.nav`
    ${PrimaryNavBase}  
`

export default ({items, position}) => 
    <PrimaryNav position={position}>
        <ul>
            {items.map(item => 
                <li>{item.component || <a href={item.url}>{item.alias}</a>}</li>
            )}
        </ul>
    </PrimaryNav>