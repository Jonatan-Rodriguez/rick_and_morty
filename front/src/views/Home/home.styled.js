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
        background-image: url(${props => props.rickAndMortyHome});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 200px;
        background-color: aquamarine;
        border-radius: 50px;
        display: flex;
        align-items: end;
        justify-content: center;
        position: relative;

        .boxInputs{
            width: 90%;
            height: 80px;
            background-color: ${props => props.theme.colors.primary};
            -webkit-box-shadow: -6px 5px 11px 3px rgba(89,89,89,1);
            -moz-box-shadow: -6px 5px 11px 3px rgba(89,89,89,1);
            box-shadow: -6px 5px 11px 3px rgba(89,89,89,1);
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            position: absolute;
            bottom: -40px;

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

            .btnFilter{
                background-color: ${props => props.theme.colors.primary};
                width: 80px;
                height: 30px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: ${props => props.theme.sizes.fontBase};
                box-shadow: -6px 5px 11px 3px rgba(89,89,89,1);
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
    }
    
`