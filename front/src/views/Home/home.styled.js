import styled from 'styled-components';

export const ContainerHome = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction:column;
    gap: 20px;
    background-color: ${props => props.theme.colors.base};
    padding: 2% 5%;

    .boxExplorer{
        width: 100%;
        height: 150px;
        background-color: aquamarine;
        border-radius: 50px;
        display: flex;
        align-items: end;
        justify-content: center;

        .boxInputs{
            width: 90%;
            height: 70px;
            background-color: blueviolet;
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    
    .search{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        .btnRandom:hover {
            background: #11B0C890;
        }

        .btnRandom:hover .icon {
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(-360deg);
            }
        }
    }

    .containerTitle{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        img{
            height: 3em;
            width: 3em;
        }

        .title{
            color: white;
            font-size: 2em;
            margin: 0;
            padding: 0;
            font-weight: 600;
            letter-spacing: 3px;
        }
    }
`