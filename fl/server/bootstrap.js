var flushSampleData, insertSampleData, insertSampleLoops, insertSampleRooms, sampleLoops, sampleRooms;

sampleRooms = [
    {
        name: "Jam laboratory",
        players: [
            {
                _id: "x79Qf9i3APqpYAobM"
            }
        ],
        ownerId: "x79Qf9i3APqpYAobM"
    }
];

sampleLoops = [
    {
        name: "Rockin bass lick 1",
        length: 12,
        preset: true,
        userId: "",
        instrument: "bass",
        type: "loop",
        bpm: 110,
        url: "/loops/presets/bass/110bpm-rock-bass-1.mp3"
    },
    {
        name: "Rockin bass lick 2",
        length: 12,
        preset: true,
        userId: "",
        instrument: "bass",
        type: "loop",
        bpm: 110,
        url: "/loops/presets/bass/110bpm-rock-bass-2.mp3"
    },
    {
        name: "Shredding guitar lick 1",
        length: 12,
        preset: true,
        userId: "",
        instrument: "guitar",
        type: "loop",
        bpm: 110,
        url: "/loops/presets/guitar/110bpm-rock-guitar-1.mp3"
    },
    {
        name: "Shredding guitar lick 2",
        length: 12,
        preset: true,
        userId: "",
        instrument: "guitar",
        type: "loop",
        bpm: 110,
        url: "/loops/presets/guitar/110bpm-rock-guitar-2.mp3"
    },
    {
        name: "Gut-busting drums 1",
        length: 12,
        preset: true,
        userId: "",
        instrument: "drums",
        type: "loop",
        bpm: 110,
        url: "/loops/presets/drums/110bpm-rock-drums-1.mp3"
    },
    {
        name: "Gut-busting drums 2",
        length: 12,
        preset: true,
        userId: "",
        instrument: "drums",
        type: "loop",
        bpm: 110,
        url: "/loops/presets/drums/110bpm-rock-drums-2.mp3"
    }
];

insertSampleRooms = function() {
    var i, room, _i, _len, _results;
    _results = [];
    for (i = _i = 0, _len = sampleRooms.length; _i < _len; i = ++_i) {
        room = sampleRooms[i];
        _results.push(Rooms.insert(room));
    }
    return _results;
};

insertSampleLoops = function() {
    var i, myLoop, _i, _len, _results;
    _results = [];
    for (i = _i = 0, _len = sampleLoops.length; _i < _len; i = ++_i) {
        myLoop = sampleLoops[i];
        _results.push(Loops.insert(myLoop));
    }
    return _results;
};

insertSampleData = function() {
    insertSampleRooms();
    return insertSampleLoops();
};

flushSampleData = function() {
    Rooms.remove({});
    return Loops.remove({});
};

if (Rooms.find().count() === 0) {
    flushSampleData();
    insertSampleData();
}
