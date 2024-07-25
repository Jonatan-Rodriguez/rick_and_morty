import styled from 'styled-components';

export const ContainerFooter = styled.div`
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px 10px;

    .boxTop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-bottom: 15px;
        .image{
            background-image: url(${props => props.logoImg});
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            width: 83px;
            height: 59px;
            cursor: pointer;
        }
        .link{
            display: flex;
            justify-content: space-between;
            align-items: self-end;
            flex-direction: column;
            row-gap: 30px;

            .pages{
                display: flex;
                justify-content: space-between;
                align-items: center;
                column-gap: 30px;

                p{
                    font-size: ${props => props.theme.sizes.fontSmall};
                    color: ${props => props.theme.colors.textPrimary};
                    text-align: center;
                    font-weight: bold;
                    cursor: pointer;
                }
            }
            .social{
                display: flex;
                justify-content: center;
                align-items: center;
                column-gap: 15px;
                
                .ico{
                    width: 35px;
                    height: 35px;
                    border-radius: 50px;
                    background-color: ${props => props.theme.colors.base};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 20px;
                    border: 1px solid white;
                    transition: all .5s ease-out;
                }
                .ico:hover{
                    border: 1px solid black;
                    transform: scale(1.2);
                }
            }
        }
    }
    .boxBottom{
        width: 100%;
        height: 60px;
        border-top: 1px solid gainsboro;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 7px;

        .footerText{
            font-size: ${props => props.theme.sizes.fontSmall};
            color: ${props => props.theme.colors.textPrimary};
            text-align: center;
            font-weight: bold;
        }
    }
`