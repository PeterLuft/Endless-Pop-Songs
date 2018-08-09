export const retrieveNewSong = () => dispatch => {
    dispatch(requestSong());

    return fetch('http://localhost:5000/song')
        .then((response) => response.json().then(song => {
                dispatch(receiveSong(song));
            })
        )
        .catch(error => {
            console.log(error);
            dispatch(failureSong(error));
        });
};

export const requestSong = () => ({
    type: "REQUEST_SONG"
});

export const receiveSong = song => ({
    type: "RECEIVE_SONG",
    payload: song
});

export const failureSong = message => ({
    type: "FAILURE_SONG",
    message: message
});