import React, { useState } from "react";
import { useDispatch } from "react-redux";
// Actions
import { getChar, SearchName } from "../../redux/action";
// Styled Components
import { 
  SearchContainer, 
  InputGroup, 
  StyledInput
} from "./searchBar.style"; // Nota: Quitamos FiltersGroup y StyledSelect de aquí porque ahora usamos el componente Filters
// Componentes
import Filters from "../Filters/Filters"; // <--- IMPORTAMOS TUS FILTROS AQUÍ
// Icons
import { Search, X } from "lucide-react";

const SearchBar = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const searchChar = () => {
        dispatch(SearchName(name));
        dispatch(getChar(name, '1'));
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchChar();
        }
    }

    const btnRemove = () => {
        setName('');
        dispatch(SearchName(''));
        dispatch(getChar('', '1'));
    }

    return (
        <SearchContainer>
            {/* IZQUIERDA: Input de Búsqueda */}
            <InputGroup>
                <Search className="search-icon" />
                <StyledInput
                    type="text"
                    placeholder="Buscar personaje..."
                    value={name}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                
                {name.length > 0 && (
                    <button className="clear-btn" onClick={btnRemove}>
                        <X size={16} />
                    </button>
                )}
            </InputGroup>

            {/* DERECHA: Tus Filtros (Orden, Origen, Género) */}
            <Filters />
            
        </SearchContainer>
    );
}

export default SearchBar;