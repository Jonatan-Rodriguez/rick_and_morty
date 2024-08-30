import styled from 'styled-components';

export const ContainerFilter = styled.div`
    position: relative;
    display: inline-block;

    .filter {
        height: 40px;
        padding: 10px 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 7px;
        border: 1px solid rgba(0, 0, 0, 0.192);
        cursor: pointer;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.021);
        transition: all 0.3s;
        border-radius: 25px;
    }

    .filter svg {
        height: 16px;
        fill: rgb(77, 77, 77);
        transition: all 0.3s;
    }
    .filter:hover {
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.11);
        background-color: rgb(59, 59, 59);
        color: white;
    }
    .filter:hover svg {
        fill: white;
    }
`;

export const FilterOptions = styled.div`
    position: absolute;
    top: 40px;
    left: 0;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 200px;
    z-index: 3;
    
    opacity: 0;
    transform: translateY(-20px); /* Se desplaza hacia arriba para animación */
    transition: opacity 0.4s ease, transform 0.4s ease; /* Ajuste de duración y tipo de animación */
    pointer-events: none; /* No interactivo cuando está oculto */

    ${ContainerFilter}:hover & {
        opacity: 1;
        transform: translateY(0); /* Vuelve a la posición original */
        pointer-events: auto; /* Permite la interacción */
    }

    select {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .filter-btn, .clear-btn {
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .filter-btn {
        background-color: #007bff;
        color: white;
    }

    .filter-btn:hover {
        background-color: #0056b3;
    }

    .clear-btn {
        background-color: #f8f9fa;
        color: black;
    }

    .clear-btn:hover {
        background-color: #e2e6ea;
    }
`;
