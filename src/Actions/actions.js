import axios from 'axios';


export const retrieveNewSong = () => dispatch => {
    console.log("GETTING SONG");

    dispatch(requestSong());

    axios.get('http://localhost:5000/song')
        .then((response) => {
                console.log(response.data);
                dispatch(receiveSong(response));
            }
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