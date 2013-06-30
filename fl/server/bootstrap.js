
sampleRooms = [
    //{
        //name: "Jam laboratory",
        //players: [
            //{
                //_id: "x79Qf9i3APqpYAobM"
            //}
        //],
        //ownerId: "x79Qf9i3APqpYAobM"
    //}
];

sampleLoops = [
    {
        name: "Rockin bass lick 1",
        length: "12",
        preset: "true",
        userId: "",
        instrument: "bass",
        type: "loop",
        bpm: "110",
        url: "/loops/presets/bass/110bpm-rock-bass-1.mp3"
    },
    {
        name: "Rockin bass lick 2",
        length: "12",
        preset: "true",
        userId: "",
        instrument: "bass",
        type: "loop",
        bpm: "110",
        url: "/loops/presets/bass/110bpm-rock-bass-2.mp3"
    },
    {
        name: "Shredding guitar lick 1",
        length: "12",
        preset: "true",
        userId: "",
        instrument: "guitar",
        type: "loop",
        bpm: "110",
        url: "/loops/presets/guitar/110bpm-rock-guitar-1.mp3"
    },
    {
        name: "Shredding guitar lick 2",
        length: "12",
        preset: "true",
        userId: "",
        instrument: "guitar",
        type: "loop",
        bpm: "110",
        url: "/loops/presets/guitar/110bpm-rock-guitar-2.mp3"
    },
    {
        name: "Gut-busting drums 1",
        length: "12",
        preset: "true",
        userId: "",
        instrument: "drums",
        type: "loop",
        bpm: "110",
        url: "/loops/presets/drums/110bpm-rock-drums-1.mp3"
    },
    {
        name: "Gut-busting drums 2",
        length: "12",
        preset: "true",
        userId: "",
        instrument: "drums",
        type: "loop",
        bpm: "110",
        url: "/loops/presets/drums/110bpm-rock-drums-2.mp3"
    }
];

insertSampleRooms = function() {
    for(var i = 0; i < sampleRooms.length; i++){
        Rooms.insert( sampleRooms[i] );
    }
};

insertSampleLoops = function() {
    for(var i = 0; i < sampleLoops.length; i++){
        Loops.insert( sampleLoops[i] );
    }
    //console.log(" Inserted loops, collection is now::", Loops.find().fetch() );
};

insertSampleData = function() {
    insertSampleRooms();
    insertSampleLoops();
};

flushSampleData = function() {
    Rooms.remove({});
    Loops.remove({});
    console.log("Flushed sample data");
};

//if (Rooms.find().count() === 0) {
//Meteor.startup(function(){
    //flushSampleData();
    //insertSampleData();
//});
//}
