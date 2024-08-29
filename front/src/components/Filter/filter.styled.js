import styled from 'styled-components';

export const ContainerFilter = styled.div`
    background-color: ${props => props.theme.colors.primary};
    width: 80px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.sizes.fontBase};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);


`