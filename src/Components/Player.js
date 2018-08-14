import React, {Component} from 'react';
import Tone from 'tone';



class Player extends Component {

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
        console.log("clicked");
        Tone.Transport.start();
    };

    render(){
        return (
            <div className="Player">
                <h2>Audio player</h2>

                <button onClick={() => {this.playClicked()}}>Play Tone</button>

            </div>
        )
    }
}

export default Player;

