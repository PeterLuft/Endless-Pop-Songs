import * as types from '../Constants/songActionTypes';

export const retrieveNewSong = () => dispatch => {
    dispatch(requestSongs());

    return fetch('http://localhost:5000/song')
        .then(response => response.json().then(data => {
                dispatch(receiveSongs(data));
            })
        )
        .catch(error => {
            dispatch(failureSongs(error));
        });
};

export const requestSongs = () => ({
    type: types.REQUEST_SONGS
});

export const receiveSongs = songs => ({
    type: types.RECEIVE_SONGS,
    payload: songs
});

export const failureSongs = message => ({
    type: types.FAILURE_SONGS,
    message: message
});

