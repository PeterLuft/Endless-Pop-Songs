import React, {Component} from 'react';
import Tone from 'tone';
import PropTypes from 'prop-types';


const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];


class AudioPlayer extends Component {

    static propTypes = {
        song: PropTypes.object,
        handlePlay: PropTypes.func,
        isPlaying: PropTypes.bool
    };

    static defaultProps = {
        song: {
            chords: [],
            id: null,

        },
        isPlaying: false
    };

    state = {
        localSong: {}
    };

    componentDidMount() {
        this.loadSong(this.props.song);
        this.setState({
            localSong: this.props.song
        });
    };

    componentDidUpdate() {
        //if new song has been selected, call the expensive load function again
        if (this.state.localSong !== this.props.song) {
            this.loadSong(this.props.song);
            this.setState({
                localSong: this.props.song
            });
        }
        if (this.props.isPlaying) {
            Tone.Transport.start();
        }
        else {
            Tone.Transport.stop();
        }

    }

    parseChord = (input, scale) => {
        //TODO: takes letter representation of chord and returns series of notes comprising it
        let root = 0;
        let chord;


        if (input[1] === '#') {
            root = scale.indexOf(input.slice(0, 2)) + 1;
        }
        else {
            root = scale.indexOf(input.slice(0, 1)) + 1;
        }

        console.log(root);


        switch (root) {
            case 1:
                //major root
                chord = [scale[0] + '3', scale[2] + '3', scale[4] + '3'];
                break;
            case 2:
                chord = [scale[1] + '3', scale[3] + '3', scale[5] + '3'];
                break;
            case 3:
                chord = [scale[2] + '3', scale[4] + '3', scale[6] + '3'];
                break;
            case 4:
                chord = [scale[3] + '3', scale[5] + '3', scale[0] + '3'];
                break;
            case 5:
                chord = [scale[4] + '3', scale[6] + '3', scale[1] + '3'];
                break;
            case 6:
                chord = [scale[5] + '3', scale[0] + '4', scale[2] + '4'];
                break;
            case 7:
                chord = [scale[6] + '3', scale[1] + '4', scale[3] + '4'];
                break;
            default:
                chord = [];

        }


      //  console.log(chord);

        //for now just returns placeholder chord
        return chord;
    };


    shiftKey = (scale, toShift) => {
        for (let i = 0; i < toShift; i++) {
            scale.push(scale.shift());
        }
        let toRemove = [1, 3, 6, 8, 10];

        for (let i = toRemove.length - 1; i >= 0; i--) {
            scale.splice(toRemove[i], 1);
        }
        return scale;
    };

    loadSong = songData => {
        console.log('loading data for song');

        this.synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
        let scale = this.shiftKey(notes.slice(), notes.indexOf(this.props.song.key));


        let chordList = songData.chords[0].map((chord, index) => {
            let entry = [];
            entry.push("0:" + index);
            entry.push(this.parseChord(chord, scale));
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
        this.props.handlePlay();
    };

    render() {

        return (
            <div>
                <h2>{this.props.song.title}</h2>
                <button onClick={() => this.playClicked()}>{this.props.isPlaying ? 'Pause' : 'Play'}</button>
            </div>
        )
    }
}

export default AudioPlayer;