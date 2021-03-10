import {createGlobalStyle} from 'styled-components'
import bg from './../assets/images/mountain.jpg'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }
    body{
        width: 100%;
        height: 100%;
        background-image: url(${bg});
        background-position-y: 20%;
        background-size: cover;
    }
`

export default GlobalStyle

