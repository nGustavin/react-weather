import styled from 'styled-components'
import bg from './../../assets/images/forest.png'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    background-image: url(${bg});
    background-size: cover;
    padding: 20px 130px;
`