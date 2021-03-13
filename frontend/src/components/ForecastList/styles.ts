import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > h1{
        margin-bottom: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        color: white;
    }
    
    > .grid-container {
        display: grid;
        width: 100%;
        overflow: auto;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 1fr;
        gap: 15px;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;


        >div {
            background: linear-gradient(
                to right bottom,
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.2)
            );
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
            width: 6em;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 0.5em 1em;

            > div{
                text-align: center;
                >h3{
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 300;
                    font-size: 19px;
                    color: #FFF;
                }
            }

            > h2 {
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                font-size: 1.5rem;
                color: #FFF;
            }
        }
    }
    scrollbar-color: white rgba(255, 255, 255, 0.2);
    scrollbar-width: thin;
    
`;
