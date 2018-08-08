import React, { Component } from 'react';
import './App.css';
import Generator from '../Components/Generator';
import {connect} from "react-redux";
import {retrieveNewSong} from "../Actions/actions";

//use named export for unconnected component (for testing)
export class App extends Component {

    render() {
    return (
      <div className="App">
          <h1>Song Generator</h1>
          <Generator generateClicked={() => this.props.generateSong()}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

    generateSong: () => {
        dispatch(retrieveNewSong())
    }

});


export default connect(mapStateToProps, mapDispatchToProps)(App);
