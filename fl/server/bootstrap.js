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
    name: "test loop",
    length: 12,
    url: "/loops/ck-part-1-hhat.mp3"
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

