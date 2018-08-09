import React, {Component} from 'react';
import Tone from 'tone';



class Player extends Component {

    componentDidMount(){


        let cChord = ["C4", "E4", "G4", "B4"];
        let dChord = ["D4", "F4", "A4", "C5"];
        let gChord = ["B3", "D4", "E4", "A4"];

        this.synth = new Tone.PolySynth(4, Tone.Synth).toMaster();

        this.progression = new Tone.Part((time, chord) => {
            this.synth.triggerAttackRelease(chord, "8n", time);
        }, [["0:0:2", cChord], ["0:1", cChord], ["0:1:3", dChord], ["0:2:2", cChord], ["0:3", cChord], ["0:3:2", gChord]]).start("2m");

        this.progression.loop = true;
        this.progression.loopEnd = "1m";
        this.progression.humanize = true;

        Tone.Transport.bpm.value = 80;
        Tone.Transport.loop = true;
        Tone.Transport.loopStart = "4m";
        Tone.Transport.loopEnd = "8m";




    }

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

