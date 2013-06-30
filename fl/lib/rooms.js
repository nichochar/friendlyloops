
Meteor.methods({
    joinRoom: function(roomId) {
        var room, roomPlayers;
        room = Rooms.findOne(roomId);
        roomPlayers = room.players || [];
        if (roomPlayers.length < 4) {
            roomPlayers.push({
                _id: this.userId
            });
            return Rooms.update(roomId, {
                $set: {
                    players: roomPlayers
                }
            });
        }
    },
    leaveRoom: function(roomId) {
        var room, roomPlayers;
        room = Rooms.findOne(roomId);
        roomPlayers = room.players;
        roomPlayers.splice(roomPlayers.indexOf({
            _id: this.userId
        }), 1);
        return Rooms.update(roomId, {
            $set: {
                players: roomPlayers
            }
        });
    }
});
