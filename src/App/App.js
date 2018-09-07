import React, {Component} from 'react';
import LoginPage from '../Components/Login/LoginPage';
import Timeline from '../Components/Timeline/Timeline';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {retrieveNewSong} from "../Actions/songs";
import {createUser, logUserIn, logUserOut, setUserError} from '../Actions/user';
import {playPressed} from "../Actions/controls";
import {setLoginMode} from "../Actions/loginPage";
import MenuBar from '../Components/MenuBar/MenuBar';

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
        signUserOut: PropTypes.func,
        playPressed: PropTypes.func,
        isPlaying: PropTypes.bool,
        activeId: PropTypes.number,
        error: PropTypes.string,
        loginMode: PropTypes.string,
        setLoginMode: PropTypes.func,
        favoritePressed: PropTypes.func,
        sharePressed: PropTypes.func,
        uploadClicked: PropTypes.func
    };

    componentDidMount() {
        this.props.generateSong();
    }

    render() {

        if (this.props.signedIn) {
            if (!this.props.loadedSongs) {
                return (
                    <div className="App">
                        <h3>Loading songs...</h3>
                    </div>
                );
            }
            else {
                return (
                    <div className="App">
                        <MenuBar
                            logoutClicked={() => this.props.signUserOut()}
                            uploadClicked={() => this.props.uploadClicked()}
                        />
                        <Timeline
                            songs={this.props.currentSongs}
                            handlePlay={song => this.props.playPressed(song)}
                            activeSong={this.props.activeSong}
                            isPlaying={this.props.isPlaying}
                        />
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
                            loginMode={this.props.loginMode}
                            setLoginMode={name => this.props.setLoginMode(name)}
                            error={this.props.error}
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
    user: state.users.user,
    activeSong: state.controls.activeSong,
    isPlaying: state.controls.isPlaying,
    error: state.users.error,
    loginMode: state.loginPage.loginMode
});

const mapDispatchToProps = (dispatch, ownProps) => ({

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
    },
    uploadClicked: () => {
        //todo: upload button logic
        console.log('uploading');
    },
    playPressed: song => {
        dispatch(playPressed(song));
    },
    setLoginMode: name => {
        dispatch(setLoginMode(name));
        dispatch(setUserError(''));
    },
    favoritePressed: song => {
        //todo: implement redux favorite actions
        console.log(song);
    },
    sharePressed: song => {
        //todo: implement redux share actions
        console.log(song);
    }


});


export default connect(mapStateToProps, mapDispatchToProps)(App);
