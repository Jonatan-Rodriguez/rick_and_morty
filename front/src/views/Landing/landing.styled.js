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

    .section2{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50vh;

        .carruselText{
            width: 100%;

            .textBtn{
                display: flex;
                align-items: center;
                justify-content: space-between;

                p{
                    font-family: ${props => props.theme.fonts.primary};
                    font-size: ${props => props.theme.sizes.fontLarge};
                    font-weight: bold;
                    color: ${props => props.theme.colors.textPrimary};
                }

                .btn{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    column-gap: 15px;

                    .btnPrev{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 40px;
                        height: 40px;
                        color: white;
                        background-color: black;
                        border-radius: 30px;
                        text-align: center;
                        font-size: 1.3em;
                        cursor: pointer;
                    }
                    .btnNext{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 40px;
                        height: 40px;
                        color: white;
                        background-color: black;
                        border-radius: 30px;
                        text-align: center;
                        font-size: 1.3em;
                        cursor: pointer;
                    }
                }
            }

            .carrusel{
                width: 100%;
                padding: 20px 0;
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
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 100%;
            column-gap: 50px;

            .card{
                display: flex;
                justify-content: start;
                align-items: center;
                flex-direction: column;
                row-gap: 15px;
                width: 40%;
                max-width: 350px;
                height: 90%;
                padding: 10px;
                border-radius: 25px;
                background-color: ${props => props.theme.colors.primary};
                -webkit-box-shadow: -6px 5px 11px 3px rgba(89,89,89,1);
                -moz-box-shadow: -6px 5px 11px 3px rgba(89,89,89,1);
                box-shadow: -6px 5px 11px 3px rgba(89,89,89,1);

                .img{
                    background-size: cover;
                    background-position: center top;
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
                        color: ${props => props.theme.colors.textPrimary};
                    }
                    .cardLocation{
                        display: flex;
                        align-items: center;
                        column-gap: 7px;
                        font-size: ${props => props.theme.sizes.fontMedium};
                        font-family: ${props => props.theme.fonts.secondary};
                        width: 100%;
                        color: ${props => props.theme.colors.textSecondary};

                        img{
                            height: 30px;
                            width: 30px;
                        }
                    }
                }
            }
            .text{
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-direction: column;
                height: 100%;

                h2{
                    font-size: ${props => props.theme.sizes.fontXLarge};
                    color: ${props => props.theme.colors.textPrimary};
                    text-align: center;
                }
                p{
                    font-size: ${props => props.theme.sizes.fontLarge};
                    font-family: ${props => props.theme.fonts.secondary};
                    width: 100%;
                    color: ${props => props.theme.colors.textSecondary};
                    text-align: center;
                }
                button{
                    width: 100%;
                }
            }
        }
    }
    
`