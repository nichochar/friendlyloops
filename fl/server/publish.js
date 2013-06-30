/*
   SHARED MONGO COLLECTIONS
vim: ts=4 sw=4 et :
*/

/* USERS
*/

Meteor.publish('currentUser', function() {
    return Meteor.users.find(this.userId);
});


// Do not publish user secret info to the client
Meteor.publish('allUsers', function() {
    return Meteor.users.find({}, {
        fields: {
            secret_id: false,
            isAdmin: false,
            emails: false,
            notifications: false,
            'profile.email': false,
            'services.twitter.accessToken': false,
            'services.twitter.accessTokenSecret': false,
            'services.twitter.id': false,
            'services.facebook.accessToken': false,
            'services.facebook.accessTokenSecret': false,
            'services.facebook.id': false,
            'services.password': false
        }
    });
});

Meteor.startup(function() {
    return Meteor.users.allow({
        insert: function(userId, doc) {
            return true;
        },
        update: function(userId, doc, fields, modifier) {
            return (doc._id && doc._id === userId);
        },
        remove: function(userId, doc) {
            return (doc._id && doc._id === userId);
        }
    });
});



/*
 * ROOMS
*/

Meteor.publish('rooms', function() { return Rooms.find(); });

Meteor.publish('room', function(roomId) { return Rooms.find(roomId); });

Meteor.startup(function() {
    return Rooms.allow({
        insert: function(userId, doc) {
            return true;
        },
        update: function(userId, doc) {
            return (doc._id && doc._id === userId);
        },
        remove: function(userId, doc) {
            return (doc._id && doc._id === userId);
        }
    });
});


/*
 *  LOOPS
*/
Meteor.publish('loops', function(){ return Loops.find(); });
Meteor.publish('loop', function(loopId){ return Loops.find(loopId); });
Meteor.startup(function() {
    return Loops.allow({
        insert: function(userId, doc) {
            return true;
        },
        update: function(userId, doc) {
            return true;
            //return (doc._id && doc._id === userId);
        },
        remove: function(userId, doc) {
            return true;
            //return (doc._id && doc._id === userId);
        }
    });
});


/*
 * CHAT
 */
Meteor.publish("messages", function(roomId){
    return Messages.find({ roomId: roomId });
});


// Allow anyone to post a message, but only the message owner to update or remove
Meteor.startup(function(){
    return Messages.allow({
        insert: function(userId, doc){
            return true;
        },
        update: function(userId, doc){
            //return (doc.userId && doc.userId === userId);
            return false;
        },
        remove: function(userId, doc){
            return (doc.userId && doc.userId === userId);
        }
    });
});
