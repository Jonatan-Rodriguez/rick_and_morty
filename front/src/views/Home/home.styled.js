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
    background-color: #18191a;
    padding: 2% 5%;

    .logoHome{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;

        .logo{
            height: 150px;
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