import * as userTypes from '../Constants/userActionTypes';


export const createUser = creds => dispatch => {

    dispatch(requestCreateUser());

    let config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: creds.email,
            password: creds.password
        })
    };

    return fetch('http://localhost:3001/users', config)
        .then(response => response.json().then(data => {
                console.log(data);

                dispatch(receiveCreateUser(data.user));
                dispatch(logUserIn(creds));
            })
        )
        .catch(error => {
            dispatch(failureCreateUser(error));
        })

};

export const logUserIn = creds => dispatch => {

    dispatch(requestLogin());

    let config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            logemail: creds.email,
            logpassword: creds.password
        })
    };

    return fetch('http://localhost:3001/auth', config)
        .then(response => response.json().then(data => {
                //TODO: create middleware to store token in localstorage instead
                localStorage.setItem("id_token", data.token);
                dispatch(receiveLogin(data.user));
            })
        ).catch(error => {
            dispatch(failureLogin(error));
        })
};

export const logUserOut = () => dispatch => {

    dispatch(requestLogout());
    localStorage.removeItem("id_token");
    dispatch(receiveLogout());

};


export const requestCreateUser = () => ({
    type: userTypes.REQUEST_CREATE_USER
});

export const receiveCreateUser = user => ({
    type: userTypes.RECEIVE_CREATE_USER,
    payload: {
        user: user
    }
});

export const failureCreateUser = error => ({
    type: userTypes.FAILURE_CREATE_USER,
    message: error.message
});

export const requestLogin = () => ({
    type: userTypes.REQUEST_LOGIN
});

export const receiveLogin = user => ({
    type: userTypes.RECEIVE_LOGIN,
    payload: {
        user: user
    }
});

export const failureLogin = error => ({
    type: userTypes.FAILURE_LOGIN,
    message: error.message
});

export const requestLogout = () => ({
    type: userTypes.REQUEST_LOGOUT
});

export const receiveLogout = () => ({
    type: userTypes.RECEIVE_LOGOUT
});

export const setUserError = message => ({
    type: userTypes.SET_USER_ERROR,
    message: message
});