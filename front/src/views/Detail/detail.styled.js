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
        grid-template-columns: repeat(4, 1fr); /* Cuatro columnas iguales */
        grid-template-rows: repeat(3, auto); /* Tres filas automáticas */
        gap: 20px; /* Espacio entre los elementos */
        width: 100%;
        max-width: 1200px;
        justify-content: center; /* Centrar contenido horizontalmente */
        align-items: center; /* Centrar contenido verticalmente */

        .imgChar {
            grid-column: 2 / span 2; /* Comienza en la columna 2 y ocupa 2 columnas */
            grid-row: span 2; /* Ocupa dos filas */
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
            grid-column: span 4; /* Ocupa cuatro columnas */
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
            background-color: ${props => props.theme.colors.secondary};
            color: ${props => props.theme.colors.textSecondary};
            padding: 15px;
            font-size: 1.2em;
            border-radius: 8px;
            gap: 10px;

            img {
                width: 24px;
                height: 24px;
            }
        }

        .data:nth-child(3) {
            grid-column: span 2; /* Ajuste para manejar correctamente la estructura cuando hay 6 o más items */
        }

        .data:nth-child(4) {
            grid-column: span 2; /* Ajuste para manejar correctamente la estructura cuando hay 6 o más items */
        }
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