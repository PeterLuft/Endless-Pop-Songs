import * as songActions from './songs';
import * as userActions from './user';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import * as userTypes from '../Constants/userActionTypes';
import * as songTypes from '../Constants/songActionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('should request and receive a song', () => {
        fetchMock.getOnce('http://localhost:5000/song', {name: 'Bob'});


        const expectedActions = [
            {
                type: songTypes.REQUEST_SONG
            },
            {
                type: songTypes.RECEIVE_SONG, payload: {name: 'Bob'}
            }
        ];

        const store = mockStore({currentSong: {}});

        return store.dispatch(songActions.retrieveNewSong()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should request and receive a token upon login', () => {
        fetchMock.postOnce('http://localhost:3001/auth',
            {
                title: 'Successful Authentication',
                user: {
                    name: 'Kevin Smith'
                },
                token: '1234'
            }
        );

        const mockCreds = {
            email: 'testemail',
            password: 'test'
        };
        const expectedActions = [
            {
                type: userTypes.REQUEST_LOGIN
            },
            {
                type: userTypes.RECEIVE_LOGIN,
                payload: {
                    user: {
                        name: 'Kevin Smith'
                    }
                }
            }
        ];

        const store = mockStore({});
        return store.dispatch(userActions.logUserIn(mockCreds)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    });


});


describe('user actions', () => {

    it('should create a REQUEST_CREATE_USER action', () => {
        const expectedAction = {
            type: userTypes.REQUEST_CREATE_USER
        };
        expect(userActions.requestCreateUser()).toEqual(expectedAction);
    });

    it('should create a RECEIVE_CREATE_USER action', () => {
        const expectedUser = {
            name: 'Kevin',
            token: '1234'
        };
        const expectedAction = {
            type: userTypes.RECEIVE_CREATE_USER,
            payload: {
                user: expectedUser
            }
        };
        expect(userActions.receiveCreateUser(expectedUser)).toEqual(expectedAction);
    });

    it('should crate a FAILURE_CREATE_USER action', () => {
        const expectedError = 'Error';
        const expectedAction = {
            type: userTypes.FAILURE_CREATE_USER,
            message: expectedError
        };
        expect(userActions.failureCreateUser(expectedError)).toEqual(expectedAction);
    });


    it('should create a REQUEST_LOGIN action', () => {
        const expectedAction = {
            type: userTypes.REQUEST_LOGIN
        };
        expect(userActions.requestLogin()).toEqual(expectedAction);
    });

    it('should create a RECEIVE_LOGIN action', () => {
        const expectedUser = {
            name: 'Kevin',
            token: '1234'
        };
        const expectedAction = {
            type: userTypes.RECEIVE_LOGIN,
            payload: {
                user: expectedUser
            }
        };
        expect(userActions.receiveLogin(expectedUser)).toEqual(expectedAction);
    });

    it('should create a FAILURE_LOGIN action', () => {
        const expectedError = 'Bad error';
        const expectedAction = {
            type: userTypes.FAILURE_LOGIN,
            message: expectedError
        };
        expect(userActions.failureLogin(expectedError)).toEqual(expectedAction);
    });

    it('should create a REQUEST_LOGOUT action', () => {
        const expectedAction = {
            type: userTypes.REQUEST_LOGOUT
        };
        expect(userActions.requestLogout()).toEqual(expectedAction);
    });

    it('should create a RECEIVE_LOGOUT action', () => {
        const expectedAction = {
            type: userTypes.RECEIVE_LOGOUT
        }
        expect(userActions.receiveLogout()).toEqual(expectedAction);
    });

});

describe('song actions', () => {

    it('should create a REQUEST_SONG action', () => {
        const expectedAction = {
            type: songTypes.REQUEST_SONG
        };
        expect(songActions.requestSongs()).toEqual(expectedAction);
    });

    it('should create a RECEIVE_SONG action', () => {
        const expectedSong = {
            name: "My song",
            length: 238
        };
        const expectedAction = {
            type: songTypes.RECEIVE_SONG,
            payload: expectedSong
        };

        expect(songActions.receiveSongs(expectedSong)).toEqual(expectedAction);
    });

    it('should create a FAILURE_SONG action', () => {
        const expectedError = "Fatal error, panic";
        const expectedAction = {
            type: songTypes.FAILURE_SONG,
            message: expectedError
        };
        expect(songActions.failureSongs(expectedError)).toEqual(expectedAction);
    });

});