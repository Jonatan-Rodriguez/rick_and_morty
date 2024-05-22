import { SET_LOADING, SEARCH_NAME, GET_CHAR, GET_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-types';
import axios from "axios";

export const setLoading = (loading) => {
    return { type: SET_LOADING, payload: loading };
}

export const SearchName = (name) => {
    return { type: SEARCH_NAME, payload: name };
}

export const getChar = (name, numPag) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        const endpoint = `http://localhost:3001/rickandmorty/character?name=${name}&&numPag=${numPag}`;
        try {
            const { data } = await axios.get(endpoint);
            dispatch({
                type: GET_CHAR,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_CHAR,
                payload: { allCharacters: [], pages: 0 },
            });
        } finally {
            dispatch(setLoading(false));
        }
    }
}

export const getFav = () => {
    const endpoint = 'http://localhost:3001/rickandmorty/favorite';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);

            return dispatch({
                type: GET_FAV,
                payload: data,
            });

        } catch (error) {
            throw Error(error.message);
        }
    }
}

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/favorite';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);

            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/favorite/${id}`;

    return async (dispatch) => {
        try {
            await axios.delete(endpoint);
            return dispatch({
                type: REMOVE_FAV,
                payload: id,
            });
        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order };
};