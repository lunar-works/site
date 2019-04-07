import React from 'react'
import styled,{css} from 'styled-components'

export const GridContainerBase = css`
    display: flex;
    width: 100%;
    justify-content: ${props => props.align || 'center'};
    align-items: ${props => props.position || 'center'};
    flex-direction: ${props => props.column || 'row'};
    ${props => props.image 
        ? `
            background-image: url(${props.image});
            background-size: ${props.imageSize || 'cover'};
            background-repeat: no-repeat; 
            background-position:  ${props.imagePos || 'cover'};
        `
        : ` `
    }

    @media(max-width:500px){
        flex-direction: column;
    }
    `

const GridContainer = styled.div`
    ${GridContainerBase}
`

export default GridContainer