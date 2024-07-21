import styled from 'styled-components';

export const ContainerCardLandingTop = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    min-width: 300px;
    width: 350px;
    max-width: 370px;
    height: 270px;
    max-height: 280px;
    padding: 10px;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.primary};
    /* -webkit-box-shadow: -6px 5px 11px 3px rgba(89,89,89,1);
    -moz-box-shadow: -6px 5px 11px 3px rgba(89,89,89,1);
    box-shadow: -6px 5px 11px 3px rgba(89,89,89,1); */

    .img{
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
        background-image: url(${props => props.image});
        width: 100%;
        height: 70%;
        border-radius: 15px;
    }

    .textInfo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .text{
            display: flex;
            align-items: start;
            justify-content: space-between;
            flex-direction: column;

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

        .like{
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            background-color: black;
            border-radius: 30px;
            font-size: 1.3em;
            padding: 7px 14px;
            
            p{
                text-align: center;
                font-weight: bold;
            }
        }
        
    }
`