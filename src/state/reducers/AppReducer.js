// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';

// IMPORT REDUCERS

import { FetchHomeReducer } from '../reducers/HomeReducer';
import { LoginReducer } from '../reducers/LoginReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    home: FetchHomeReducer,
    login: LoginReducer,
});