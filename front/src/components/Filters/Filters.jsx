import React from "react";
// redux
import { useDispatch } from "react-redux";
import { getChar } from "../../redux/action";
// iconos
import { ArrowUpDown, Globe, Users, Trash2, ChevronDown } from "lucide-react";
// estilos
import { 
  FiltersContainer, 
  StyledSelect, 
  ResetButton, 
  SelectWrapper,
  IconLeft,
  IconRight
} from "./filters.styled";

const Filters = () => {
    const dispatch = useDispatch();

    const [filters, setFilters] = React.useState({
        order: 'def',
        source: 'all',
        gender: 'all'
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);
        dispatch(getChar({ ...newFilters, numPag: 1 }));
    };

    const handleReset = () => {
        const defaultFilters = { order: 'def', source: 'all', gender: 'all' };
        setFilters(defaultFilters);
        dispatch(getChar({ ...defaultFilters, numPag: 1 }));
    };

    const hasActiveFilters = filters.order !== 'def' || filters.source !== 'all' || filters.gender !== 'all';

    return (
        <FiltersContainer>
            {/* 1. ORDENAMIENTO */}
            <SelectWrapper>
                {/* Icono Izquierdo (Descriptivo) */}
                <IconLeft>
                    <ArrowUpDown size={16} />
                </IconLeft>
                
                <StyledSelect 
                    name="order" 
                    value={filters.order === 'def' ? "" : filters.order} 
                    onChange={handleFilterChange}
                    $isPlaceholder={filters.order === 'def'}
                >
                    <option value="" disabled hidden>Orden</option>
                    <option value="def">Por defecto</option>
                    <option value="A">Ascendente (A-Z)</option>
                    <option value="D">Descendente (Z-A)</option>
                </StyledSelect>

                {/* Icono Derecho (Flecha personalizada) */}
                <IconRight>
                    <ChevronDown size={16} />
                </IconRight>
            </SelectWrapper>

            {/* 2. ORIGEN */}
            <SelectWrapper>
                <IconLeft>
                    <Globe size={16} />
                </IconLeft>
                
                <StyledSelect 
                    name="source" 
                    value={filters.source === 'all' ? "" : filters.source} 
                    onChange={handleFilterChange}
                    $isPlaceholder={filters.source === 'all'}
                >
                    <option value="" disabled hidden>Origen</option>
                    <option value="all">Todos</option>
                    <option value="api">Base de datos (API)</option>
                    <option value="created">Creados por mí</option>
                </StyledSelect>

                <IconRight>
                    <ChevronDown size={16} />
                </IconRight>
            </SelectWrapper>

            {/* 3. GÉNERO */}
            <SelectWrapper>
                <IconLeft>
                    <Users size={16} />
                </IconLeft>
                
                <StyledSelect 
                    name="gender" 
                    value={filters.gender === 'all' ? "" : filters.gender} 
                    onChange={handleFilterChange}
                    $isPlaceholder={filters.gender === 'all'}
                >
                    <option value="" disabled hidden>Género</option>
                    <option value="all">Todos</option>
                    <option value="Male">Masculino</option>
                    <option value="Female">Femenino</option>
                    <option value="Genderless">Sin género</option>
                    <option value="unknown">Desconocido</option>
                </StyledSelect>

                <IconRight>
                    <ChevronDown size={16} />
                </IconRight>
            </SelectWrapper>

            {/* 4. RESET */}
            {hasActiveFilters && (
                <ResetButton onClick={handleReset}>
                    <Trash2 size={16} />
                    Limpiar
                </ResetButton>
            )}
        </FiltersContainer>
    );
};

export default Filters;