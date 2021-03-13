import {createGlobalStyle} from 'styled-components'
import bg from './../assets/images/forest.png'

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
        background-position-y: 60%;
        background-size: cover;
    }
    ::-webkit-scrollbar{
        height: 10px;
    }
    ::-webkit-scrollbar-track{
        background: rgba(255,255,255, 0.2);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background: white;
        border-radius: 10px;
    }
`

export default GlobalStyle

