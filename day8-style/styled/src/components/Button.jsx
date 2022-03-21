import style from 'styled-components'

export const Button = style.button`
background: ${props=>props.background};
color: ${props=>props.color};
padding: 10px 20px;
border-radius: 3px;
border: ${props=>props.border};
font-weight: larger;
`