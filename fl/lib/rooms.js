
Meteor.methods({
    joinRoom: function(roomId) {
        var room, roomPlayers;
        room = Rooms.find(roomId);
        roomPlayers = room.players || [];
        //var me = Meteor.users.find({ _id: this.userId });

        if (roomPlayers.length < 4) {
            roomPlayers.push( Meteor.user() );
            console.log(roomPlayers);
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

    bootRoomUser: function(userId, roomId){
        console.log("is stub? ", this.isSimulation);

        var roomPlayers = _.pluck( roomId.players, '_id' );
        roomPlayers.splice(roomPlayers.indexOf( this.userId ), 1);

        if(roomPlayers.length === 0) Rooms.remove( roomId ); 
        else Rooms.update(roomId, { $set: { players: roomPlayers } });
        //if(this.user.isAdmin() || 
    },

    deleteRoom: function(roomId){
        var tmpRoom = Rooms.findOne(roomId);
        if(this.user.isAdmin() || tmpRoom.ownerId === this.userId) Rooms.remove(roomId);
        else throw new Meteor.error(403, "Cannot delete a room that is not yours!");
    }


});
