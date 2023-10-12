import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions-types';

const initialState = {
    myFavorites:[],
    allCharacters:[]
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
        return { ...state, myFavorites: action.payload, allCharacters: action.payload };
       /*  case ADD_FAV:
        return{
            ...state,
            myFavorites:[...state.myFavorites, action.payload],
            allCharacters:[...state.allCharacters, action.payload]
        } */

        case REMOVE_FAV:
        return { ...state, myFavorites: action.payload };
        /* case REMOVE_FAV:
        return{
            ...state,
            myFavorites: state.myFavorites.filter((fav) => fav.id !== action.payload),
            allCharacters: state.allCharacters.filter((fav) => fav.id !== action.payload)
        } */

        case FILTER:
            const characterFilter = [...state.allCharacters].filter((character) => character.gender === action.payload);
        
        return{
            ...state,
            myFavorites:
                action.payload === 'all'?
                state.allCharacters:
                characterFilter
        }

        case ORDER:
            const allCharactersFavCopy= [...state.myFavorites];
        return{
            ...state,
            myFavorites: action.payload === 'A' ? allCharactersFavCopy.sort((a,b) => a.id - b.id) :
            allCharactersFavCopy.sort((a,b) => b.id - a.id)
        }

        default:
            return {...state};
    }
};

export default reducer;