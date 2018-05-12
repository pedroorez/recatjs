import {
    FETCH_HOME_PENDING,
    FETCH_HOME_FULFILLED,
    FETCH_HOME_REJECTED
} from '../actions/HomeActions';


// INITIALIZE STATE

const initialState = {
    home: {destaques: [], canais: []},
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchHomeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_HOME_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_HOME_FULFILLED:
            return {
                ...state,
                home: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_HOME_REJECTED:
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