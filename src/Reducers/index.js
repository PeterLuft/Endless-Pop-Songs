import {combineReducers} from "redux";
import * as userTypes from '../Constants/userActionTypes';
import * as songTypes from '../Constants/songActionTypes';

const songs = (state = {
        isFetching: false,
        currentSong: {}
        }, action) => {
            switch(action.type){
                case songTypes.REQUEST_SONG:
                    return {
                        ...state,
                        isFetching: true
                    };
                case songTypes.RECEIVE_SONG:
                    return {
                        ...state,
                        isFetching: false,
                        currentSong: action.payload
                    };
                case songTypes.FAILURE_SONG:
                    return {
                        ...state,
                        isFetching: false,
                        errorMessage: action.message
                    };
                default:
                    return state;
            }
};

const users = (state = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('id_token'),
    errorMessage: '',
    user: null
}, action) => {
    switch(action.type){
        case userTypes.REQUEST_CREATE_USER:
            return {
                ...state,
                isFetching: true
            };
        case userTypes.RECEIVE_CREATE_USER:
            return {
                ...state,
                isFetching: false,
                user: action.payload.user
            };
        case userTypes.FAILURE_CREATE_USER:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        case userTypes.REQUEST_LOGIN:
            return {
                ...state,
                isFetching: true
            };
        case userTypes.RECEIVE_LOGIN:
            return {
                ...state,
                isFetching: false,
                user: action.payload.user,
                errorMessage: '',
                isAuthenticated: true
            };
        case userTypes.FAILURE_LOGIN:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message,
                isAuthenticated: false
            };
        case userTypes.REQUEST_LOGOUT:
            return {
                ...state,
                isFetching: true
            };
        case userTypes.RECEIVE_LOGOUT:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                user: null,
                errorMessage: ''
            };
        default:
            return state

    }
};

const Reducer = combineReducers({songs, users});

export default Reducer;