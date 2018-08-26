import React, {Component} from 'react';
import Signin from './Signin';
import Signup from './Signup';
import PropTypes from 'prop-types';

class LoginPage extends Component {

    static propTypes = {
        createAccount: PropTypes.func,
        signUserIn: PropTypes.func
    };

    render(){
        return(
            <div>
                <Signup submitSignup={creds => this.props.createAccount(creds)}/>
                <Signin submitSignin={creds => this.props.signUserIn(creds)}/>
            </div>
        );
    }

}

export default LoginPage;