
Meteor.user = {
    _id:    "asdfasdfasdf",         // facebook user id
    services: {
        facebook: {
            id: "218293811",
            name: "Alex Ehrns",
            username: "ehrns"
        }
    },
    createdAt: "timestamp"
};    


Room = {
    _id:    "aslkdfjlasjfw8efu",
    name:   "My Room",
    owner_id: "asldfkjasldfjaa",
    players: [
        {
            _id: "sakdjflas"
        }
    ],
    playerLoops: [
        {
            userId: "asdfasdf",
            loopId: "asdfa"
        }
    ],
    createdAt: "timestamp"

};

Message = {
    _id: "asdfkjlasdf",
    userId: "asdlfkjasdf",
    
    

};

Loop = {
    _id: "asdlfkjasdfas",
    name: "asdfljasldfas",
    length: 12,
    url: "/asdfk/asdfk/asd.mp3",
    createdAt: "timestamp"
};
