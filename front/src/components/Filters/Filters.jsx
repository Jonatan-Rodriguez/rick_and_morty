import React from "react";
import { useDispatch } from "react-redux";
import { getChar } from "../../redux/action";
import { FiltersContainer, StyledSelect, ResetButton } from "./filters.styled";

const Filters = () => {
    const dispatch = useDispatch();

    // Estado local para mantener los valores controlados
    const [filters, setFilters] = React.useState({
        order: 'def',
        source: 'all',
        gender: 'all'
    });

    // Manejador único: Actualiza estado Y dispara la acción (Auto-Apply)
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        
        // 1. Actualizamos el estado visual
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);

        // 2. Disparamos la acción a Redux automáticamente
        dispatch(getChar({ ...newFilters, numPag: 1 }));
    };

    // Resetear filtros
    const handleReset = () => {
        const defaultFilters = { order: 'def', source: 'all', gender: 'all' };
        setFilters(defaultFilters);
        dispatch(getChar({ ...defaultFilters, numPag: 1 }));
    };

    // Verificamos si hay algún filtro activo para mostrar el botón de limpiar
    const hasActiveFilters = filters.order !== 'def' || filters.source !== 'all' || filters.gender !== 'all';

    return (
        <FiltersContainer>
            {/* SELECT: ORDEN */}
            <StyledSelect name="order" value={filters.order} onChange={handleFilterChange}>
                <option value="def">Orden: Default</option>
                <option value="A">A-Z (Ascendente)</option>
                <option value="D">Z-A (Descendente)</option>
            </StyledSelect>

            {/* SELECT: ORIGEN */}
            <StyledSelect name="source" value={filters.source} onChange={handleFilterChange}>
                <option value="all">Origen: Todos</option>
                <option value="api">API Oficial</option>
                <option value="created">Mis Creaciones</option>
            </StyledSelect>

            {/* SELECT: GÉNERO */}
            <StyledSelect name="gender" value={filters.gender} onChange={handleFilterChange}>
                <option value="all">Género: Todos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </StyledSelect>

            {/* BOTÓN LIMPIAR (Solo visible si hay filtros) */}
            {hasActiveFilters && (
                <ResetButton onClick={handleReset}>
                    Limpiar
                </ResetButton>
            )}
        </FiltersContainer>
    );
};

export default Filters;