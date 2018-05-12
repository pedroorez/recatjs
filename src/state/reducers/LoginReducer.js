import {
    LOG_USER_PENDING,
    LOG_USER_FULFILLED,
    LOG_USER_REJECTED,
    GET_STREAMING_KEYS_FULFILLED,
    LOG_OFF_USER_FULFILLED,
    GET_STREAMING_KEYS_PENDING,
    GET_STREAMING_KEYS_REJECTED
} from '../actions/LoginActions';


// INITIALIZE STATE

const initialState = {
    token: null,
    fetching: false,
    fetched: false,
    failed: false,
    msid: null,
    mstoken: null,
    isLogged: false
};


// REDUCER

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_USER_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case LOG_USER_FULFILLED:
            return {
                ...state,
                token: action.payload.token,
                isLogged: action.payload.isLogged,
                fetching: false,
                fetched: true,
                failed: false
            };
        case LOG_USER_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: false,
                failed: true
            };
        case LOG_OFF_USER_FULFILLED:
            return {
                ...state,
                token: null,
                isLogged: false,
                fetching: false,
                fetched: false,
                failed: true
            };
        case GET_STREAMING_KEYS_FULFILLED:
            return {
                ...state,
                msid: action.payload.msid,
                mstoken: action.payload.mstoken,
                nome: action.payload.nome,
                fetching: false,
                fetched: true,
                failed: false
            };
        case GET_STREAMING_KEYS_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case GET_STREAMING_KEYS_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};