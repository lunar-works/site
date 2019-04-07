import styled, {css} from 'styled-components'

export const headingBase = css`
    font-weight: lighter;
    line-height: 2.9rem;
    color: ${props => props.theme.headings.color};
    font-family: ${props => props.theme.headings.font};
    margin: 0;
`

export const H1 = styled.h1`
    ${headingBase}
    font-size: ${props => props.theme.headings.h1.size};
`

export const H2 = styled.h2`
    ${headingBase}
    font-size: ${props => props.theme.headings.h2.size};
`

export const H3 = styled.h3`
    ${headingBase}
    font-size: ${props => props.theme.headings.h3.size};
`

export const H4 = styled.h4`
    ${headingBase}
    font-size: ${props => props.theme.headings.h4.size};
`

export const H5 = styled.h5`
    ${headingBase}
    font-size: ${props => props.theme.headings.h5.size};
`

export const H6 = styled.h6`
    ${headingBase}
    font-size: ${props => props.theme.headings.h6.size};
`