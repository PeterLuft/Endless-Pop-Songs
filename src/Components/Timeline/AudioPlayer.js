import React, {Component} from 'react';
import Tone from 'tone';
import PropTypes from 'prop-types';


class AudioPlayer extends Component {

    static propTypes = {
        song: PropTypes.object,
        handlePlay: PropTypes.func
    };

    static defaultProps = {
        song: {}
    };

    componentDidMount(){
        this.loadSong(this.props.song);
    };

    parseChord = input => {
        //TODO: takes letter representation of chord and returns series of notes comprising it
        //for now just returns placeholder chord
        return ["C4", "E4", "G4"];
    };

    loadSong = songData => {
        this.synth = new Tone.PolySynth(4, Tone.Synth).toMaster();

        let chordList = songData.chords.map((chord, index) => {
            let entry = [];
            entry.push("0:" + index);
            entry.push(this.parseChord(chord));
            return entry;
        });

        this.progression = new Tone.Part((time, chord) => {
            this.synth.triggerAttackRelease(chord, "4n", time);
        }, chordList).start("0");

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
        this.props.handlePlay();
    };

    render() {
        return (
            <div>
                <button onClick={() => this.playClicked()}>Play</button>
            </div>
        )
    }
}

export default AudioPlayer;