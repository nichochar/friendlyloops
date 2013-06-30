


Meteor.methods({
    addComment: function(roomId, msg){
        return Messages.insert({
            time: new Date().getTime(),
            userId: this.userId,
            roomId: roomId,
            text: msg      
        });
    },

    removeComment: function(messageId){
        var tmpMsg = Messages.findOne(messageId);
        if(tmpMsg && (user.isAdmin || tmpMsg.userId === this.userId)){
           Messages.remove( messageId );
        } else {
           //console.log("User not authorized to delete this message"); 
        }
    }
});
