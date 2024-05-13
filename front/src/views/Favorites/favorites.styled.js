import styled from 'styled-components';

export const ContainerFavorite = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction:column;
    gap: 20px;
    background-color: #18191a;
    padding: 2% 5%;

    .titleFilter{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .containerTitle{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            img{
                height: 2.5em;
                width: 2.5em;
            }

            .title{
                color: white;
                font-size: 2.5em;
                margin: 0;
                padding: 0;
                font-weight: 600;
                letter-spacing: 3px;
            }
        }
    }

    .favorites{
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction:row;
        flex-wrap:wrap;
        gap: 20px 20px;
        width: 100%;
        height: 100%;
    }
`