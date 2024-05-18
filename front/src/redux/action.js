import {GET_CHAR, GET_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions-types';
import axios from "axios";

export const getChar = (name, numPag) => {
    const endpoint = `http://localhost:3001/rickandmorty/character?name=${name}&&numPag=${numPag}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);

            return dispatch({
                type: GET_CHAR,
                payload: data,
            });

        } catch (error) {
            throw Error(error.message);
        }
    }
}

export const getFav = () => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
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
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
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
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const filterCards = (gender) => {
    return { type: FILTER, payload:gender };
};

export const orderCards = (order) => {
    return { type: ORDER, payload:order };
};