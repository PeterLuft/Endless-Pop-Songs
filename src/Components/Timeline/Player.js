import React, {Component} from 'react';
import Tone from 'tone';
import ChordDisplay from './ChordDisplay';
import PropTypes from 'prop-types';



class Player extends Component {

    static propTypes = {
        song: PropTypes.object
    };

    static defaultProps = {
        song: {
            title: 'Song title',
            tempo: 0,
            key: 'A',
            chords: []
        }
    };

    componentDidUpdate(){
        this.loadSong(this.props.song);
    }

    loadSong = songData => {
        this.synth = new Tone.PolySynth(4, Tone.Synth).toMaster();

        this.progression = new Tone.Part((time, chord) => {
            this.synth.triggerAttackRelease(chord, "4n", time);
        }, [
            ["0:0", songData.chords[0]],
            ["0:1", songData.chords[1]],
            ["0:2", songData.chords[2]],
            ["0:3", songData.chords[3]]
        ]).start("0");

        this.progression.loop = true;
        this.progression.loopEnd = "1m";
        this.progression.humanize = true;

        Tone.Transport.bpm.value = songData.tempo;
        Tone.Transport.loop = true;
        Tone.Transport.loopStart = "4m";
        Tone.Transport.loopEnd = "8m";
    };

    playClicked = () => {
        Tone.Transport.start();
    };

    render(){
        return (
            <div className="Player">
                <h4>{this.props.song.title}</h4>
                <p>Tempo: {this.props.song.tempo}</p>
                <p>Key: {this.props.song.key}</p>
                <ChordDisplay chords={this.props.song.chords}/>
                <button onClick={() => {this.playClicked()}}>Play Tone</button>
            </div>
        )
    }
}

export default Player;

