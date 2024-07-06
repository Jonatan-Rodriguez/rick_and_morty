import styled from 'styled-components';

export const ContainerLanding = styled.div`
    background-color: ${props => props.theme.colors.base};
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 2% 5%;

    .section1{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        .section1ImgBackground{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 85vh;
            background-image: url(${props => props.backgroundImage});
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            border-radius: 50px;
            padding-left: 5%;

            .boxTextBtn{
                display: flex;
                align-items: start;
                justify-content: space-around;
                flex-direction: column;
                max-width: 40%;
                height: 80%;
                
                h1{
                    margin: none;
                    font-size: ${props => props.theme.sizes.fontXLarge};
                    color: ${props => props.theme.colors.base};
                    
                    span{
                        color: ${props => props.theme.colors.textTertiary};
                    }
                }
                p{
                    font-size: ${props => props.theme.sizes.fontLarge};
                    color: ${props => props.theme.colors.base};
                }
            }
            .imgLanding{
                background-image: url(${props => props.imgLanding});
                background-size: contain;
                background-position: right center;
                background-repeat: no-repeat;
                width: 50%;
                height: 100%;
                position: relative;
                left: 45px;
            }
        }
    }

    .section3{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 80vh;

        .cardText{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            height: 100%;

            .card{
                display: flex;
                justify-content: start;
                align-items: center;
                flex-direction: column;
                row-gap: 15px;
                width: 40%;
                height: 90%;
                padding: 10px;
                border-radius: 25px;
                background-color: ${props => props.theme.colors.primary};
                border: 1px solid red;

                .img{
                    background-size: cover;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-image: url(${props => props.imgCard});
                    width: 100%;
                    height: 80%;
                    border-radius: 15px;
                }

                .textInfo{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: start;
                    row-gap: 10px;
                    width: 100%;
                    
                    .cardName{
                        font-family: ${props => props.theme.fonts.primary};
                        font-size: ${props => props.theme.sizes.fontLarge};
                        font-weight: bold;
                    }
                    .cardLocation{
                        display: flex;
                        align-items: center;
                        column-gap: 7px;
                        font-size: ${props => props.theme.sizes.fontMedium};
                        font-family: ${props => props.theme.fonts.primary};
                        

                        img{
                            height: 30px;
                        }
                    }
                }
            }
            .text{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                h2{
                    font-size: ${props => props.theme.sizes.fontLarge};
                    color: ${props => props.theme.colors.textPrimary};
                }
            }
        }
    }
    
`