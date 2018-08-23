import React, {Component} from 'react';
import './App.css';
import Generator from '../Components/Generator';
import Signup from '../Components/Signup';
import Signin from '../Components/Signin';
import Signout from '../Components/Signout';

import Player from '../Components/Player';
import {connect} from "react-redux";
import {retrieveNewSong} from "../Actions/songs";
import {createUser, logUserIn, logUserOut} from '../Actions/user';

//use named export for unconnected component (for testing)
export class App extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount() {
        this.props.generateSong();
    }

    render() {
        if (this.props.signedIn) {
            return (
                <div className="App">
                    <h1>Song Generator</h1>
                    <Signout logoutClicked={() => this.props.signUserOut()}/>
                    <Generator generateClicked={() => this.props.generateSong()}/>
                    <Player song={this.props.currentSong}/>
                </div>
            );
        }
        else {
            return (
                <div className="App">
                    <Signup submitSignup={creds => this.props.createAccount(creds)}/>
                    <Signin submitSignin={creds => this.props.signUserIn(creds)}/>
                </div>
            );
        }
    }
}


const mapStateToProps = state => ({
    currentSong: state.songs.currentSong,
    signedIn: state.users.isAuthenticated

});

const mapDispatchToProps = dispatch => ({

    generateSong: () => {
        dispatch(retrieveNewSong());
    },
    createAccount: creds => {
        dispatch(createUser(creds));
    },
    signUserIn: creds => {
        dispatch(logUserIn(creds));
    },
    signUserOut: () => {
        dispatch(logUserOut());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)

(
    App
)
;
