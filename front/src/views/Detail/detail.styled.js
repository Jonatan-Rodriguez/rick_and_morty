import styled from 'styled-components';

export const ContainerDetail = styled.div`
    min-height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.base};
    padding: 5%;

    .infoChar {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(4, auto);
        gap: 20px;
        width: 100%;
        max-width: 1200px;
        justify-content: center;
        align-items: center;

        .imgChar {
            grid-column: 1 / span 3;
            grid-row: span 4;
            width: 100%;
            height: auto;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 8px;
            }
        }

        .name {
            grid-column: span 4;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.textPrimary};
            padding: 20px;
            font-size: 1.8em;
            border-radius: 8px;
        }

        .data {
            display: flex;
            align-items: center;
            justify-content: center;
            grid-column: span 2;
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.textSecondary};
            padding: 15px;
            font-size: 1.5em;
            border-radius: 8px;
            gap: 10px;

            img {
                width: 24px;
                height: 24px;
            }
        }

        /* .data:nth-child(3) {
            grid-column: span 2;
        }

        .data:nth-child(4) {
            grid-column: span 2;
        } */
    }

    @media (max-width: 768px) {
        .infoChar {
            grid-template-columns: 1fr 1fr; /* Dos columnas en pantallas más pequeñas */
            grid-template-rows: auto; /* Filas automáticas */
            gap: 15px;

            .imgChar {
                grid-column: span 2; /* Ocupa ambas columnas en pantallas pequeñas */
                grid-row: span 1; /* Solo una fila */
            }

            .name {
                grid-column: span 2; /* Ocupa ambas columnas en pantallas pequeñas */
                font-size: 1.5em;
            }
        }
    }
`;