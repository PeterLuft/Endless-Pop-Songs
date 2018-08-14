import * as songActions from './songs';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);


describe('async actions', () => {

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('should create REQUEST_SONG when called', () => {
        fetchMock.getOnce('http://localhost:5000/song', {name: 'Bob'});


        const expectedActions = [
            {
                type: "REQUEST_SONG"
            },
            {
                type: "RECEIVE_SONG", payload: {name: 'Bob'}
            }
        ];

        const store = mockStore({currentSong: {}});

        return store.dispatch(songActions.retrieveNewSong()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});


describe('actions', () => {

    it('should create an action called REQUEST SONG', () => {
        const expectedAction = {
            type: "REQUEST_SONG"
        };
        expect(songActions.requestSong()).toEqual(expectedAction);
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

        expect(songActions.receiveSong(expectedSong)).toEqual(expectedAction);
    });

    it('should create an action called FAILURE SONG', () => {

        const expectedError = "Fatal error, panic";
        const expectedAction = {
            type: "FAILURE_SONG",
            message: expectedError
        };

        expect(songActions.failureSong(expectedError)).toEqual(expectedAction);

    });

});