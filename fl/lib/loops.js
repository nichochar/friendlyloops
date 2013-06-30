


Meteor.methods({
    playLoop: function(loopId){

    },
    chooseLoop: function(loopId, roomId){
        var loop = Loops.findOne(loopId);
        var room = Rooms.findOne(roomId);
        if(room){
            var roomLoops = (room.playerLoops || []); 
            roomLoops.push({ userId: this.userId, loop: loop });
            if(roomLoops.length < 10){
                Rooms.update(roomId, { $set: { playerLoops: roomLoops } });
            } else {
                throw new Meteor.error(403, "Too many loops chosen!");
            }
        } else throw new Meteor.error(403, "No room in session!" );
    },
    
    // Return an array of loop ids which have already been chosen by players
    getChosenLoops: function(roomId){
        if(typeof roomId === 'undefined'){
            return [];
        } else {
            var room = Rooms.find(roomId);
            return _(room.playerLoops || []).pluck('loopId') || [];
        }
    }

});


