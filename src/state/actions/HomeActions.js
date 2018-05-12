import { fetchHome } from '../../services/HomeService';

// FETCH HOME ACTION NAMES

export const FETCH_HOME = 'FETCH_HOME';
export const FETCH_HOME_PENDING = 'FETCH_HOME_PENDING';
export const FETCH_HOME_FULFILLED = 'FETCH_HOME_FULFILLED';
export const FETCH_HOME_REJECTED = 'FETCH_HOME_REJECTED';


// ACTION GENERATORS

const fetchHomeAction = () => ({
    type: FETCH_HOME,
    payload: fetchHome()
});


// EXPORT ACTIONS

export { fetchHomeAction as fetchHome };