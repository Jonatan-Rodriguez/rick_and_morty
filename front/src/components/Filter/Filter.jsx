import React, { useState } from 'react';
import { ContainerFilter, FilterOptions } from './filter.styled';

const Filter = () => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <ContainerFilter
            onMouseEnter={() => setShowFilters(true)}
            onMouseLeave={() => setShowFilters(false)}
        >
            <button title="filter" className="filter">FILTROS
                <svg viewBox="0 0 512 512" height="1em">
                    <path
                        d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
                    ></path>
                </svg>
            </button>
            {showFilters && (
                <FilterOptions>
                    <p>Ordenar:</p>
                    <select>
                        <option value="">-</option>
                        <option value="">A-Z</option>
                        <option value="">Z-A</option>
                    </select>
                    <p>Especie:</p>
                    <select>
                        <option value="">-</option>
                        <option value="">Opción 1</option>
                        <option value="">Opción 2</option>
                        <option value="">Opción 3</option>
                    </select>
                    <p>Genero:</p>
                    <select>
                        <option value="">-</option>
                        <option value="">Femenino</option>
                        <option value="">Masculino</option>
                        <option value="">Desconocido</option>
                    </select>
                    <p>Tipo:</p>
                    <select>
                        <option value="">-</option>
                        <option value="">Todos</option>
                        <option value="">Comunidad</option>
                        <option value="">Oficial</option>
                    </select>
                    <button className="filter-btn">Filtrar</button>
                    <button className="clear-btn">Limpiar</button>
                </FilterOptions>
            )}
        </ContainerFilter>
    );
};

export default Filter;
