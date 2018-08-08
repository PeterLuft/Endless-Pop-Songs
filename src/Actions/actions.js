export const retrieveNewSong = () => dispatch => {
    console.log("GETTING SONG");

    dispatch(requestSong());

    //TODO: request from server with axios

    dispatch(receiveSong());

}

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