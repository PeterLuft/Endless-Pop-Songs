const express= require('express');
const app = express();

const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

generateSong = () => {
    let key = keys[randInteger(keys.length - 1)];
    let scale = shiftKey(notes.slice(), notes.indexOf(key));

    let progression = [];

    for(let i = 0; i < randInteger(4, 2); i++){
        let a = [];
        generateChords().map(interval => {
            a.push(scale[interval - 1]);
        });

        progression.push(a);
    }

    console.log(progression);

    let song = {
        name: "bob",
        key: key,
        progression: progression
    };

    return song;
};

randInteger = (max, min = 0) => {
    return Math.floor(Math.random()* (max - min + 1)) + min;
};

randDecision = (seed) => {
    return randInteger(10) <= seed;
};

generateChords = () => {
    prog = [];
    let rn, n;

    for(let i = 0; i < 4; i++){
        //chord 1:
        rn = randInteger(100);

        if(rn <= 30){
            n = 1;
        }
        else if(rn <= 57 && rn > 30){
            n = 4;
        }
        else if(rn <= 82 && rn > 57){
           n = 6;
        }
        else if(rn <= 95 && rn > 82){
            n = 5
        }
        else{
            n = 2;
        }

        prog.push(n);
    }

    return prog;

};

shiftKey = (scale, toShift) => {
    for(let i = 0; i < toShift; i++){
        scale.push(scale.shift());
    }

    let toRemove = [1, 3, 6, 8, 10];

    for(let i = toRemove.length - 1; i >= 0; i--){
        scale.splice(toRemove[i], 1);
    }

    scale[1] = scale[1] + "/" + scale[4];
    scale[2] = scale[2] + "m";
    scale[5] = scale[5] + "m";
    scale[6] = scale[6] + "/" + scale[4];

    return scale;
};

getProgression = (chords) => {

};


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/song', (req, res) => {

    let newSong = generateSong();

    let temp = {
        tempo: 170,
        chords: [
            ["C4", "E4", "G4"],
            ["F4", "A4", "C5"],
            ["A4", "C4", "A5"],
            ["F4", "A4", "C5"]
        ],
    };
    res.send(temp);
});

app.listen(5000, () => console.log("Listening on port 5000"));