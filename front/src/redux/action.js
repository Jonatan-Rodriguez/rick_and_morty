import axios from "axios";
//actions-types
import { SET_LOADING, SEARCH_NAME, GET_CHAR, GET_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-types';
//const endpoint
const ENDPOINT_LOCAL = `http://localhost:3001/rickandmorty`;
const ENDPOINT_URL = `https://rick-and-morty-jea4.onrender.com/rickandmorty`;

export const setLoading = (loading) => {
    return { type: SET_LOADING, payload: loading };
}

export const SearchName = (name) => {
    return { type: SEARCH_NAME, payload: name };
}

export const getChar = (name, numPag) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const { data } = await axios.get(`${ENDPOINT_LOCAL}/character?name=${name}&&numPag=${numPag}`);
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
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${ENDPOINT_LOCAL}/favorite`);

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
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${ENDPOINT_LOCAL}/favorite`, character);

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

    return async (dispatch) => {
        try {
            await axios.delete(`${ENDPOINT_LOCAL}/favorite/${id}`);
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