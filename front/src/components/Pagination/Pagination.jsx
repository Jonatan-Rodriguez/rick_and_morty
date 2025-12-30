import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getChar } from '../../redux/action';

// --- TUS ESTILOS (Puedes reemplazar esto con tu código anterior si prefieres) ---

const ContainerPagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 40px 0;
    
    span {
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
    }
`;

const Button = styled.button`
    background-color: #00b5cc; /* Rick Blue */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
    box-shadow: 0px 0px 10px #00b5cc;

    &:hover {
        background-color: #0098ac;
        transform: scale(1.1);
    }

    &:disabled {
        background-color: #555;
        box-shadow: none;
        cursor: not-allowed;
        transform: none;
    }
`;

// --- COMPONENTE LÓGICO ---

const Pagination = () => {
    const dispatch = useDispatch();
    
    // Traemos: 
    // - pagesNavigation (Total de páginas)
    // - currentPage (Página actual donde estás parado)
    // - activeFilters (Para no perder el filtro al cambiar de página)
    const { pagesNavigation, currentPage, activeFilters } = useSelector(state => state);

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > pagesNavigation) return;

        // Llamamos a la acción enviando los filtros actuales + la nueva página
        dispatch(getChar({ 
            ...activeFilters, 
            numPag: newPage 
        }));
        
        // Scroll suave hacia arriba para mejorar la UX
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ContainerPagination>
            <Button 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage <= 1}
            >
                PREV
            </Button>
            
            <span>{currentPage} de {pagesNavigation}</span>

            <Button 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage >= pagesNavigation}
            >
                NEXT
            </Button>
        </ContainerPagination>
    );
};

export default Pagination;