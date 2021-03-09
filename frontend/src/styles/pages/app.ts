import styled from 'styled-components'
import bg from './../../assets/images/cool-forest.jpg'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    background-image: url(${bg});
    background-size: contain;
`