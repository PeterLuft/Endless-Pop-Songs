import React, {Component} from 'react';
import Tone from 'tone';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper'


const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 3

    }
});


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

    componentDidMount() {
        this.loadSong(this.props.song);
    };

    componentDidUpdate(prevProps) {
        //if new song has been selected, call the expensive load function again

        if (prevProps.song !== this.props.song) {
            this.loadSong(this.props.song);
        }
        if (this.props.isPlaying) {
            Tone.Transport.start();
        }
        else {
            Tone.Transport.stop();
        }
    }

    parseChord = (input, scale) => {
        let root = 0;
        let chord;


        if (input[1] === '#') {
            root = scale.indexOf(input.slice(0, 2)) + 1;
        }
        else {
            root = scale.indexOf(input.slice(0, 1)) + 1;
        }

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

        console.log("loading new song with id " + songData.id);
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


        const {classes} = this.props;

        return (
            <div>
                <Paper className={classes.paper}>
                    <Typography variant="headline">{this.props.song.title}</Typography>
                    <IconButton onClick={() => this.playClicked()}>
                        <div>
                            {this.props.isPlaying ? (
                                <PauseIcon/>
                            ) : (
                                <PlayIcon/>
                            )}
                        </div>
                    </IconButton>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(AudioPlayer);