import * as actions from './actions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);

describe('async actions', () => {

    afterEach(() => {
        mock.reset();
        mock.restore();
    });


    it('should create REQUEST_SONG when called', () => {

    });

    it('should create RECEIVE_SONG when fetching the song has been done', () => {

    });
});


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