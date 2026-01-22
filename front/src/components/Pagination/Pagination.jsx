import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChar } from '../../redux/action';
// Iconos
import { ChevronLeft, ChevronRight } from "lucide-react";
// Estilos
import { ContainerPagination, ArrowButton, NumberButton, Ellipsis } from './pagination.styled';

const Pagination = () => {
    const dispatch = useDispatch();
    const { pagesNavigation, currentPage, activeFilters } = useSelector(state => state);

    // --- FUNCIÓN DE CAMBIO DE PÁGINA ---
    const handlePageChange = (newPage) => {
        if (newPage === currentPage) return;
        if (newPage < 1 || newPage > pagesNavigation) return;

        dispatch(getChar({ 
            ...activeFilters, 
            numPag: newPage 
        }));
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- LÓGICA MATEMÁTICA PARA GENERAR LOS NÚMEROS ---
    const getPageNumbers = () => {
        const total = pagesNavigation;
        const current = currentPage;
        const delta = 2;
        const range = [];
        const rangeWithDots = [];

        if (total <= 7) {
            for (let i = 1; i <= total; i++) {
                range.push(i);
            }
            return range;
        }

        // 1. incluyo la pagina 1, la ultima, y el rango alrededor de la actual
        for (let i = 1; i <= total; i++) {
            if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
                range.push(i);
            }
        }

        // 2. Inserto los puntos suspensivos (...)
        let l;
        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    };

    const pages = getPageNumbers();

    return (
        <ContainerPagination>
            {/* Botón ANTERIOR */}
            <ArrowButton 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage <= 1}
                aria-label="Previous Page"
            >
                <ChevronLeft />
            </ArrowButton>
            
            {/* MAPEO DE NÚMEROS */}
            {pages.map((page, index) => {
                if (page === '...') {
                    return <Ellipsis key={`dots-${index}`}>...</Ellipsis>;
                }

                return (
                    <NumberButton
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={currentPage === page ? 'active' : ''}
                    >
                        {page}
                    </NumberButton>
                );
            })}

            {/* Botón SIGUIENTE */}
            <ArrowButton 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage >= pagesNavigation}
                aria-label="Next Page"
            >
                <ChevronRight />
            </ArrowButton>
        </ContainerPagination>
    );
};

export default Pagination;