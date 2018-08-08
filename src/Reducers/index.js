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
}

const Reducer = combineReducers({songs});

export default Reducer;