import {combineReducers} from "redux";
import * as userTypes from '../Constants/userActionTypes';
import * as songTypes from '../Constants/songActionTypes';
import * as controlsTypes from '../Constants/controlsActionTypes';


const songs = (state = {
    isFetching: false,
    isLoaded: false,
    currentSongs: []
}, action) => {
    switch (action.type) {
        case songTypes.REQUEST_SONGS:
            return {
                ...state,
                isFetching: true,
                isLoaded: false
            };
        case songTypes.RECEIVE_SONGS:
            return {
                ...state,
                isFetching: false,
                isLoaded: true,
                error: '',
                currentSongs: [
                    ...state.currentSongs,
                    ...action.payload
                ]
            };
        case songTypes.FAILURE_SONGS:
            return {
                ...state,
                isFetching: false,
                isLoaded: false,
                error: action.message
            };


        default:
            return state;
    }
};


const controls = (state = {
    isPlaying: false,
    activeSong: {
        id: null
    },
    loadingSong: false
}, action) => {
    switch (action.type) {
        case controlsTypes.LOAD_SONG:
            return {
                ...state,
                activeSong: action.song,
                isPlaying: true
            }

        case controlsTypes.PLAY_SONG:
            return {
                ...state,
                isPlaying: true
            };
        case controlsTypes.PAUSE_SONG:
            return {
                ...state,
                isPlaying: false
            };
        default:
            return state
    }

};

const users = (state = {
    isFetching: false,
    isLoaded: false,
    isAuthenticated: !!localStorage.getItem('id_token'),
    error: '',
    user: null
}, action) => {
    switch (action.type) {
        case userTypes.REQUEST_CREATE_USER:
            return {
                ...state,
                isFetching: true,
                isLoaded: false
            };
        case userTypes.RECEIVE_CREATE_USER:
            return {
                ...state,
                isFetching: false,
                isLoaded: true,
                error: '',
                user: action.payload.user
            };
        case userTypes.FAILURE_CREATE_USER:
            return {
                ...state,
                isFetching: false,
                isLoaded: false,
                error: action.message
            };
        case userTypes.REQUEST_LOGIN:
            return {
                ...state,
                isFetching: true,
                isLoaded: false
            };
        case userTypes.RECEIVE_LOGIN:
            return {
                ...state,
                isFetching: false,
                isLoaded: true,
                user: action.payload.user,
                error: '',
                isAuthenticated: true
            };
        case userTypes.FAILURE_LOGIN:
            return {
                ...state,
                isFetching: false,
                isLoaded: false,
                error: action.message,
                isAuthenticated: false
            };
        case userTypes.REQUEST_LOGOUT:
            return {
                ...state,
                isFetching: true,
                isLoaded: false
            };
        case userTypes.RECEIVE_LOGOUT:
            return {
                ...state,
                isFetching: false,
                isLoaded: false,
                isAuthenticated: false,
                user: null,
                error: ''
            };
        case userTypes.SET_USER_ERROR:
            return {
                ...state,
                error: action.message
            }
        default:
            return state

    }
};

const Reducer = combineReducers({songs, controls, users});

export default Reducer;