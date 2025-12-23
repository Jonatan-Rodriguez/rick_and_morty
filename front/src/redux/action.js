import axios from "../config/axiosConfig"; // Importa TU instancia, no la librería por defecto
import { SET_LOADING, SEARCH_NAME, GET_CHAR, GET_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-types';

// ELIMINA ESTAS LÍNEAS:
// const ENDPOINT_LOCAL = ...
// const ENDPOINT_URL = ...

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
            // Fíjate que ya no pongo la URL completa, solo el endpoint final
            const { data } = await axios.get(`/character?name=${name}&numPag=${numPag}`);
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
            const { data } = await axios.get(`/favorite`); // URL limpia
            return dispatch({
                type: GET_FAV,
                payload: data,
            });
        } catch (error) {
            console.error(error.message);
        }
    }
}

export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`/favorite`, character); // URL limpia
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            console.error(error.message);
        }
    };
};

export const removeFav = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`/favorite/${id}`); // URL limpia
            return dispatch({
                type: REMOVE_FAV,
                payload: id,
            });
        } catch (error) {
            console.error(error.message);
        }
    };
};

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order };
};