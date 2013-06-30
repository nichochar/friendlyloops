
Meteor.methods({
    joinRoom: function(roomId) {
        var room, roomPlayers;
        room = Rooms.findOne(roomId);
        roomPlayers = room.players || [];

        if (roomPlayers.length < 4) {
            roomPlayers.push({ _id: this.userId });
            return Rooms.update(roomId, { $set: { players: roomPlayers } });

        } else throw new Meteor.error(403, "Room is full!"); 
    },

    leaveRoom: function(roomId) {
        var room = Rooms.findOne(roomId);
        var roomPlayers = room.players;

        // Find index of the exiting user and remove them from room
        roomPlayers.splice(roomPlayers.indexOf({ _id: this.userId }), 1);

        // if no more players in room, remove it
        if(roomPlayers.length === 0) Rooms.remove( roomId ); 
        else Rooms.update(roomId, { $set: { players: roomPlayers } });

    },
    deleteRoom: function(roomId){
        var tmpRoom = Rooms.findOne(roomId);
        if(this.user.isAdmin() || tmpRoom.ownerId === this.userId) Rooms.remove(roomId);
        else throw new Meteor.error(403, "Cannot delete a room that is not yours!");
    }


});
