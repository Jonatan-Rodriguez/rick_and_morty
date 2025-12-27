import { SET_LOADING, SEARCH_NAME, GET_CHAR, GET_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-types';

const initialState = {
    myFavorites: [],
    favoriteCopy: [],
    allCharacters: [],
    pagesNavigation: 0,
    nameSearch: '',
    loading: false,
    noResults: false
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

        case FILTER:
            let filteredCharacters = [];
            if (action.payload === 'all') {
                filteredCharacters = state.favoriteCopy;
            } else {
                filteredCharacters = state.favoriteCopy.filter((character) => character.gender === action.payload);
            }
            return { ...state, myFavorites: filteredCharacters };

        case ORDER:
            const allCharactersFavCopy = [...state.myFavorites];
            return {
                ...state,
                myFavorites: action.payload === 'A' ? allCharactersFavCopy.sort((a, b) => a.name.localeCompare(b.name)) :
                    allCharactersFavCopy.sort((a, b) => b.name.localeCompare(a.name))
            };

        case GET_CHAR:
            return {
                ...state,
                // Corregido: Ahora leemos .allCharacters que es como lo manda tu Backend
                characters: action.payload.allCharacters || action.payload,
                allCharacters: action.payload.allCharacters || action.payload
            };

        case "DELETE_CHAR":
            return {
                ...state,
                // 1. Lo borramos de la lista que se ve en pantalla
                characters: state.characters.filter(char => char.id !== action.payload),
                
                // 2. Lo borramos de la copia de seguridad
                allCharacters: state.allCharacters.filter(char => char.id !== action.payload),
                
                // 3. --- EL FIX ---: También lo sacamos de Favoritos si estaba ahí
                myFavorites: state.myFavorites.filter(fav => fav.id.toString() !== action.payload.toString())
            };

        default:
            return { ...state };
    }
};

export default reducer;