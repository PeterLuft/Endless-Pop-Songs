import React, {Component} from 'react';
import './App.css';
import Generator from '../Components/Generator';
import Signup from '../Components/Signup';
import Signin from '../Components/Signin';

import Player from '../Components/Player';
import {connect} from "react-redux";
import {retrieveNewSong} from "../Actions/actions";

//use named export for unconnected component (for testing)
export class App extends Component {

    componentDidMount() {
        this.props.generateSong();
    }

    render() {
        if (this.props.signedIn) {
            return (
                <div className="App">
                    <h1>Song Generator</h1>
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
    signedIn: false

});

const mapDispatchToProps = dispatch => ({

    generateSong: () => {
        dispatch(retrieveNewSong());
    },

    createAccount: creds => {
        console.log(creds);

    },

    signUserIn: creds => {
        console.log(creds);

    }
});


export default connect(mapStateToProps, mapDispatchToProps)

(
    App
)
;
