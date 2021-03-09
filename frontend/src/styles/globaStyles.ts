import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }
    html{
        width: 100vw;
        height: 100vh;
    }
    body{
        width: 100%;
        height: 100%;
    }
`

export default GlobalStyle

