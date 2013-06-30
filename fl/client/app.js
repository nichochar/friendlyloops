
Session.set('initialLoad', true);

Meteor.subscribe('currentUser');

Meteor.subscribe('allUsers');

Meteor.subscribe('rooms');

Meteor.subscribe('loops');


// Set the interval for active users
Meteor.setInterval(function () {
    if ( Meteor.user() != null ) {
        Meteor.users.update({
            _id: Meteor.user()._id
        }, {
            $set: {
                'profile.lastPing': new Date().getTime()
            }
        });
    }
}, 10000);

// Setup the soundManager for playing loops
soundManager.setup({
    url: '/swf/',
    flashVersion: 9,
    onready: function() {
        //Play sound on read?
    }
});

