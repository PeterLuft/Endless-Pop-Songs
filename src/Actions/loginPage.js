import * as loginPageTypes from '../Constants/loginActionTypes';


export const setLoginMode = name => ({
    type: loginPageTypes.SET_LOGIN_MODE,
    mode: name
});