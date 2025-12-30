import { 
    SET_LOADING, 
    SEARCH_NAME, 
    GET_CHAR, 
    GET_FAV, 
    ADD_FAV, 
    REMOVE_FAV
} from './actions-types';

const initialState = {
    myFavorites: [],
    favoriteCopy: [],
    characters: [],
    allCharacters: [],
    pagesNavigation: 0,
    currentPage: 1, 
    activeFilters: {
        name: "",
        gender: "all",
        status: "all",
        source: "all",
        order: "def"
    },
    
    nameSearch: '',
    loading: false,
    noResults: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: action.payload };

        case SEARCH_NAME:
            return { ...state, nameSearch: action.payload };

        case GET_FAV:
            return { ...state, favoriteCopy: action.payload, myFavorites: action.payload };

        case ADD_FAV:
            return { ...state, favoriteCopy: [...state.favoriteCopy, action.payload], myFavorites: [...state.myFavorites, action.payload] };

        case REMOVE_FAV:
            const updatedFavorites = state.myFavorites.filter(fav => fav.id !== action.payload);
            return { ...state, favoriteCopy: updatedFavorites, myFavorites: updatedFavorites };

        case GET_CHAR:
            let characters = action.payload.allCharacters || action.payload;
            const { activeFilters } = action.payload; // Recibimos los filtros del action

            // Ordenamiento Visual
            if (activeFilters.order === "A") {
                characters.sort((a, b) => a.name.localeCompare(b.name));
            } else if (activeFilters.order === "D") {
                characters.sort((a, b) => b.name.localeCompare(a.name));
            }

            return {
                ...state,
                pagesNavigation: action.payload.pages,
                characters: characters,
                allCharacters: characters,
                // GUARDAMOS EL ESTADO ACTUAL
                activeFilters: activeFilters,
                currentPage: parseInt(activeFilters.numPag || 1) // Guardamos la página actual
            };

        case "DELETE_CHAR":
            return {
                ...state,
                characters: state.characters.filter(char => char.id !== action.payload),
                allCharacters: state.allCharacters.filter(char => char.id !== action.payload),
                myFavorites: state.myFavorites.filter(fav => fav.id.toString() !== action.payload.toString())
            };

        default:
            return { ...state };
    }
};

export default reducer;