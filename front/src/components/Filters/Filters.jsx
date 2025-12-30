import { useState } from "react";
import { useDispatch } from "react-redux";
// Importamos la acción única que hace todo (buscar, filtrar, paginar)
import { getChar } from "../../redux/action"; 
import styled from "styled-components";

// --- ESTILOS ---
const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    position: relative;
    z-index: 100;
`;

const ToggleButton = styled.button`
    background-color: #00b5cc;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 181, 204, 0.4);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
        background-color: #0098ac;
        transform: scale(1.05);
    }
`;

const FilterConsole = styled.div`
    margin-top: 15px;
    background-color: #202329;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #444;
    box-shadow: 0 10px 25px rgba(0,0,0,0.8);
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 300px;
    animation: fadeIn 0.3s ease-in-out;
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

const Title = styled.h4`
    color: white;
    margin: 0;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 10px;
`;

const SelectGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
        color: #9e9e9e;
        font-size: 0.8rem;
    }
`;

const Select = styled.select`
    padding: 8px;
    border-radius: 5px;
    background-color: #333;
    color: white;
    border: 1px solid #555;
    outline: none;
    cursor: pointer;

    &:focus {
        border-color: #00b5cc;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    gap: 10px;
`;

const ActionButton = styled.button`
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    background-color: ${props => props.$variant === "primary" ? "#00b5cc" : "#e91e63"}; 
    color: white;

    &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
    }
`;

// --- LÓGICA DEL COMPONENTE ---
const Filters = () => {
    const dispatch = useDispatch();
    
    // Estado para abrir/cerrar menú
    const [isOpen, setIsOpen] = useState(false);

    // Estado LOCAL (Temporal)
    const [tempFilters, setTempFilters] = useState({
        order: 'def',
        source: 'all',
        gender: 'all'
    });

    // Maneja cambios en los inputs
    const handleChange = (e) => {
        setTempFilters({
            ...tempFilters,
            [e.target.name]: e.target.value
        });
    };

    // Botón APLICAR
    const handleApply = () => {
        // CORRECCIÓN: Usamos getChar y forzamos volver a la página 1
        dispatch(getChar({ ...tempFilters, numPag: 1 }));
        // setIsOpen(false); // Descomenta si quieres que se cierre al aplicar
    };

    // Botón LIMPIAR
    const handleReset = () => {
        const defaultFilters = { order: 'def', source: 'all', gender: 'all' };
        setTempFilters(defaultFilters); // Resetea visualmente
        // CORRECCIÓN: Reseteamos Redux/Backend a la página 1 sin filtros
        dispatch(getChar({ ...defaultFilters, numPag: 1 })); 
    };

    return (
        <FilterWrapper>
            <ToggleButton onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Cerrar Filtros ✖" : "Filtrar Resultados 🔍"}
            </ToggleButton>

            {isOpen && (
                <FilterConsole>
                    <Title>Configuración</Title>

                    {/* ORDEN */}
                    <SelectGroup>
                        <label>Orden Alfabético:</label>
                        <Select name="order" value={tempFilters.order} onChange={handleChange}>
                            <option value="def">Por Defecto</option>
                            <option value="A">Ascendente (A-Z)</option>
                            <option value="D">Descendente (Z-A)</option>
                        </Select>
                    </SelectGroup>

                    {/* ORIGEN */}
                    <SelectGroup>
                        <label>Origen:</label>
                        <Select name="source" value={tempFilters.source} onChange={handleChange}>
                            <option value="all">Todos</option>
                            <option value="api">Existentes (API)</option>
                            <option value="created">Mis Creaciones (DB)</option>
                        </Select>
                    </SelectGroup>

                    {/* GÉNERO */}
                    <SelectGroup>
                        <label>Género:</label>
                        <Select name="gender" value={tempFilters.gender} onChange={handleChange}>
                            <option value="all">Todos</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Genderless">Genderless</option>
                            <option value="unknown">Unknown</option>
                        </Select>
                    </SelectGroup>

                    <ButtonGroup>
                        <ActionButton $variant="secondary" onClick={handleReset}>
                            Limpiar
                        </ActionButton>
                        <ActionButton $variant="primary" onClick={handleApply}>
                            Aplicar
                        </ActionButton>
                    </ButtonGroup>
                </FilterConsole>
            )}
        </FilterWrapper>
    );
};

export default Filters;