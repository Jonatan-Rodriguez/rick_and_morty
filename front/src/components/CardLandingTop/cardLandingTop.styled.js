import styled from 'styled-components';

export const ContainerCardLandingTop = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 40%;
    max-width: 350px;
    height: 100%;
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
        background-image: url(${props => props.image});
        width: 50px;
        height: 50px;
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
`