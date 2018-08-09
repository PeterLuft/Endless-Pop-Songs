const express= require('express');
const app = express();

const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

const interval = {
    1: 0,
    2: 2,
    3: 4,
    4: 5,
    5: 7,
    6: 9,
    7: 11
};


generateSong = () => {
    let key = keys[randInteger(keys.length - 1)];
    let scale = shiftKey(notes.slice(), notes.indexOf(key));

    console.log(scale);

    let song = {
        name: "bob",
        key: key,
        scale: scale
    };

    return song;
};

randInteger = (max, min = 0) => {
    return Math.floor(Math.random()* (max - min + 1)) + min;
};

randDecision = (seed) => {
    return randInteger(10) <= seed;
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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/song', (req, res) => {

    let newSong = generateSong();
    res.send(newSong);
});

app.listen(5000, () => console.log("Listening on port 5000"));