


Meteor.methods({
    playLoop: function(loopId){

    },
    chooseLoop: function(loopId, roomId){
        var loop = Loops.findOne(loopId);
        var room = Rooms.findOne(roomId);
        var roomLoops = room.playerLoops || []; 
        roomLoops.push({ userId: this.userId, loopId: loopId });
        if(roomLoops.length < 10){
            Rooms.update(roomId, { $set: { playerLoops: roomLoops } });
        } else {
            throw new Meteor.error(403, "Too many loops chosen!");
        }
    },
    
    // Return an array of loop ids which have already been chosen by players
    getChosenLoops: function(roomId){
        var room = Rooms.findOne(roomId);
        return _(room.playerLoops || []).pluck('loopId');
    }

});


