import * as types from '../Constants/controlsActionTypes';

export const playPressed = song => (dispatch, getState) => {
    let isPlaying = getState().controls.isPlaying;
    let activeId = getState().controls.activeSong.id;

    if(activeId !== song.id){
        //new song has been clicked to play
        dispatch(loadSong(song));
    }
    else{
        if(!isPlaying){
            dispatch(playSong());
        }
        else{
            dispatch(pauseSong());
        }
    }
};

export const loadSong = song => ({
    type: types.LOAD_SONG,
    song: song
});

//simple play/pause on loaded song
export const playSong = () => ({
   type: types.PLAY_SONG
});

export const pauseSong = () => ({
    type: types.PAUSE_SONG
});