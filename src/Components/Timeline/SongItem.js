import React, {Component} from 'react';
import ChordDisplay from './ChordDisplay';
import AudioPlayer from './AudioPlayer';
import PropTypes from 'prop-types';


class SongItem extends Component {

    static propTypes = {
        song: PropTypes.object,
        handlePlay: PropTypes.func,
        isPlaying: PropTypes.bool
    };

    static defaultProps = {
        song: {
            id: 0,
            title: 'Song title',
            tempo: 0,
            key: 'A',
            chords: []
        }
    };


    render(){
        return (
            <div className="SongItem">
                <h4>{this.props.song.title}</h4>
                <p>Tempo: {this.props.song.tempo}</p>
                <p>Key: {this.props.song.key}</p>
                <ChordDisplay chords={this.props.song.chords}/>
                <button onClick={() => this.props.handlePlay()}>{this.props.isPlaying ? 'Pause': 'Play'}</button>
            </div>
        )
    }
}

export default SongItem;

