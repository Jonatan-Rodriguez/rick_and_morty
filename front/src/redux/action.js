import axios from "../config/axiosConfig";
import { SET_LOADING, SEARCH_NAME, GET_CHAR, GET_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER, UPDATE_CHAR } from './actions-types';

// CONFIGURACIÓN DE URL (Inteligente: Nube vs Local)
const URL_BASE = process.env.REACT_APP_API_URL || "http://localhost:3001/rickandmorty";

export const setLoading = (loading) => {
    return { type: SET_LOADING, payload: loading };
}

export const SearchName = (name) => {
    return { type: SEARCH_NAME, payload: name };
}

// ACCIÓN PRINCIPAL (Carga, Filtros, Paginación y Ordenamiento)
export const getChar = (params = {}) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            // Valores por defecto
            const { name = "", numPag = 1, gender = "all", status = "all", source = "all", order = "def" } = params;

            // Petición al Backend
            const query = `/character?name=${name}&numPag=${numPag}&gender=${gender}&status=${status}&source=${source}`;
            
            // Usamos URL_BASE para que funcione en Render
            const { data } = await axios.get(`${URL_BASE}${query}`);
            
            dispatch({
                type: GET_CHAR,
                payload: { 
                    ...data, 
                    // Guardamos los filtros activos (Vital para la paginación)
                    activeFilters: { 
                        name, 
                        numPag, 
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
                    activeFilters: params // Mantenemos filtros visuales aunque falle la red
                },
            });
        } finally {
            dispatch(setLoading(false));
        }
    }
};

// --- SECCIÓN FAVORITOS Y ELIMINACIÓN (Con URL_BASE) ---

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

// Acciones Legacy (Si usas el nuevo filtro server-side, estas ya no se usan, pero las dejo por compatibilidad)
export const filterCards = (gender) => {
    return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order };
};

export const updateChar = (id, charData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`${URL_BASE}/character/${id}`, charData);
            
            return dispatch({
                type: UPDATE_CHAR,
                payload: data // El personaje actualizado
            });
        } catch (error) {
            console.error(error.message);
            alert("Error al actualizar el personaje");
        }
    };
};