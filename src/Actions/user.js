export const createUser = creds => dispatch => {

    //todo: implement fetch user from Bandmate backend

};

export const requestCreateUser = () => ({
    type: "REQUEST_CREATE_USER"
});

export const receiveCreateUser = user => ({
    type: "RECEIVE_CREATE_USER",
    payload: {
        user: user
    }
});

export const failureCreateUser = message => ({
    type: "FAILURE_CREATE_USER",
    message: message
});

