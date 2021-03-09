import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }
    body{
        /*  
        width: 100vw;
        height: 100vh; 
        */
    }
    .wrap{
        width: 100%;
        max-width: 992px;
        margin: 0 auto;
    }
`

export default GlobalStyle

