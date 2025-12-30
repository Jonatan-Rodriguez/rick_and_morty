import axios from "axios";
import { SET_LOADING, SEARCH_NAME, GET_CHAR, GET_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-types';

// <--- CAMBIO 2: Definimos la URL de tu computadora (Localhost)
const URL_BASE = "http://localhost:3001/rickandmorty";

export const setLoading = (loading) => {
    return { type: SET_LOADING, payload: loading };
}

export const SearchName = (name) => {
    return { type: SEARCH_NAME, payload: name };
}

export const getChar = (params = {}) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            // Valores por defecto
            const { name = "", numPag = 1, gender = "all", status = "all", source = "all", order = "def" } = params;

            // Petición al Backend
            const query = `/character?name=${name}&numPag=${numPag}&gender=${gender}&status=${status}&source=${source}`;
            const { data } = await axios.get(`${URL_BASE}${query}`);
            
            dispatch({
                type: GET_CHAR,
                payload: { 
                    ...data, 
                    // ⚠️ AQUÍ ESTABA EL ERROR: Faltaba incluir 'numPag'
                    activeFilters: { 
                        name, 
                        numPag, // <--- ¡ESTO ES VITAL!
                        gender, 
                        status, 
                        source, 
                        order 
                    } 
                } 
            });

        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_CHAR,
                payload: { 
                    allCharacters: [], 
                    pages: 0, 
                    activeFilters: params 
                },
            });
        } finally {
            dispatch(setLoading(false));
        }
    }
};

export const getFav = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_BASE}/favorite`);
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
            const { data } = await axios.post(`${URL_BASE}/favorite`, character);
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
            await axios.delete(`${URL_BASE}/favorite/${id}`);
            return dispatch({
                type: REMOVE_FAV,
                payload: id,
            });
        } catch (error) {
            console.error(error.message);
        }
    };
};

export const deleteChar = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${URL_BASE}/character/${id}`);
            
            return dispatch({
                type: "DELETE_CHAR",
                payload: id,
            });
        } catch (error) {
            console.error(error.message);
            alert("Error al eliminar personaje");
        }
    };
};

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order };
};