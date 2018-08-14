import {combineReducers} from "redux";

const songs = (state = {
        isFetching: false,
        currentSong: {}
        }, action) => {
            switch(action.type){
                case "REQUEST_SONG":
                    return {
                        ...state,
                        isFetching: true
                    };
                case "RECEIVE_SONG":
                    return {
                        ...state,
                        isFetching: false,
                        currentSong: action.payload
                    };
                case "FAILURE_SONG":
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
        case "REQUEST_CREATE_USER":
            return {
                ...state,
                isFetching: true
            };
        case "RECEIVE_CREATE_USER":
            return {
                ...state,
                isFetching: false,
                user: action.payload.user
            };
        case "FAILURE_CREATE_USER":
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        case "REQUEST_LOGIN":
            return {
                ...state,
                isFetching: true
            };
        case "RECEIVE_LOGIN":
            return {
                ...state,
                isFetching: false,
                user: action.payload.user,
                errorMessage: '',
                isAuthenticated: true
            };
        case "FAILURE_LOGIN":
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message,
                isAuthenticated: false
            };
        case "REQUEST_LOGOUT":
            return {
                ...state,
                isFetching: true
            };
        case "RECEIVE_LOGOUT":
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                user: null,
                errorMessage: ''
            };

    }
};

const Reducer = combineReducers({songs});

export default Reducer;