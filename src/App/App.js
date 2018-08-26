import React, {Component} from 'react';
import './App.css';
import LoginPage from '../Components/Login/LoginPage';
import Signout from '../Components/Signout';
import Timeline from '../Components/Timeline/Timeline';
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import {retrieveNewSong} from "../Actions/songs";
import {createUser, logUserIn, logUserOut} from '../Actions/user';

//use named export for unconnected component (for testing)
export class App extends Component {

    static propTypes = {
        currentSongs: PropTypes.array,
        signedIn: PropTypes.bool,
        user: PropTypes.object,
        fetchingSong: PropTypes.bool,
        loadedSongs: PropTypes.bool,
        fetchingUser: PropTypes.bool,
        loadedUser: PropTypes.bool,
        generateSong: PropTypes.func,
        createAccount: PropTypes.func,
        signUserIn: PropTypes.func,
        signUserOut: PropTypes.func
    };

    componentDidMount() {
        this.props.generateSong();
    }

    render() {

        if (this.props.signedIn) {
            if(!this.props.loadedSongs){
                return(
                    <div className="App">
                        <h3>Loading songs...</h3>
                    </div>
                );
            }
            else{
                return(
                    <div className="App">
                        <h1>Song Generator</h1>
                        <Signout logoutClicked={() => this.props.signUserOut()}/>
                        <Timeline songs={this.props.currentSongs}/>
                    </div>
                );
            }
        }
        else {
            if (this.props.fetchingUser) {
                return (
                    <div className="App">
                        <h3>Loading your info...</h3>
                    </div>
                );
            }
            else {
                return (
                    <div className="App">
                        <LoginPage
                            createAccount={creds => this.props.createAccount(creds)}
                            signUserIn={creds => this.props.signUserIn(creds)}
                        />
                    </div>
                )
            }
        }
    }
}


const mapStateToProps = state => ({
    currentSongs: state.songs.currentSongs,
    signedIn: state.users.isAuthenticated,
    fetchingSong: state.songs.isFetching,
    loadedSongs: state.songs.isLoaded,
    fetchingUser: state.users.isFetching,
    loadedUser: state.users.isLoaded,
    user: state.users.user
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
