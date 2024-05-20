import {SEARCH_NAME, GET_CHAR, GET_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions-types';

const initialState = {
    myFavorites:[],
    favoriteCopy:[],
    allCharacters: [],
    pagesNavigation:0,
    nameSearch:''
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_NAME:
        return { ...state, nameSearch: action.payload };

        case GET_CHAR:
        return { ...state, pagesNavigation:action.payload.pages, allCharacters: action.payload.allCharacters };

        case GET_FAV:
        return { ...state, favoriteCopy: action.payload, myFavorites: action.payload };

        case ADD_FAV:
        return { ...state, favoriteCopy: action.payload, myFavorites: action.payload };

        case REMOVE_FAV:
        return { ...state, favoriteCopy: action.payload, myFavorites: action.payload };

        case FILTER:
            let filteredCharacters = [];
            if (action.payload === 'all') {
                filteredCharacters = state.favoriteCopy;
            } else {
                filteredCharacters = state.favoriteCopy.filter((character) => character.gender === action.payload);
            }
        return { ...state, myFavorites: filteredCharacters };

        case ORDER:
            const allCharactersFavCopy= [...state.myFavorites];
        return{
            ...state,
            myFavorites: action.payload === 'A' ? allCharactersFavCopy.sort((a,b) => a.name.localeCompare(b.name)) :
            allCharactersFavCopy.sort((a,b) => b.name.localeCompare(a.name))
        }

        default:
            return {...state};
    }
};

export default reducer;