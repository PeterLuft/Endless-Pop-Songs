import * as actions from './actions';

describe('actions', () => {


    it('should create an action called REQUEST SONG', () => {
        const expectedAction = {
            type: "REQUEST_SONG"
        };
        expect(actions.requestSong()).toEqual(expectedAction);
    });


    it('should create an action called RECEIVE SONG', () => {
        const expectedSong = {
            name: "My song",
            length: 238
        };
        const expectedAction = {
            type: "RECEIVE_SONG",
            payload: expectedSong
        };

        expect(actions.receiveSong(expectedSong)).toEqual(expectedAction);
    });

    it('should create an action called FAILURE SONG', () => {

        const expectedError = "Fatal error, panic";
        const expectedAction = {
            type: "FAILURE_SONG",
            message: expectedError
        };

        expect(actions.failureSong(expectedError)).toEqual(expectedAction);

    });

});