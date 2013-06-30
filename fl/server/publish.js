/*
   SHARED MONGO COLLECTIONS
vim: ts=4 sw=4 et :
*/

/* USERS
*/

Meteor.publish('currentUser', function() {
    return Meteor.users.find(this.userId);
});

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
            return doc._id && doc._id === userId;
        },
        remove: function(userId, doc) {
            return doc._id && doc._id === userId;
        }
    });
});

/* ROOMS
*/


Meteor.publish('rooms', function() {
    return Rooms.find();
});

Meteor.publish('room', function(roomId) {
    return Rooms.find(roomId);
});

Meteor.startup(function() {
    return Rooms.allow({
        insert: function(userId, doc) {
            return true;
        },
        update: function(userId, doc) {
            return doc._id && doc._id === userId;
        },
        remove: function(userId, doc) {
            return doc._id && doc._id === userId;
        }
    });
});

/* ALERTS
*/


