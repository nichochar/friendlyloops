

// Called after a user signs in with facebook
Accounts.onCreateUser(function(options, user){
    user.profile = options.profile || {};
    //user.profile.karma = 0;
    //user.profile.notificationsFrequency = 1;

    // users start pending and need to be invited
    //user.isInvited = false

    if (options.email)
    user.profile.email = options.email;

    if (user.profile.email)
    //user.email_hash = CryptoJS.MD5(user.profile.email.trim().toLowerCase()).toString();

    if (!user.profile.name)
    user.profile.name = user.username;

    //user._id = user.services.facebook

    // if this is the first user ever, make them an admin
    if ( !Meteor.users.find().count() ) user.isAdmin = true;

    //trackEvent('new user', {username: user.username, email: user.profile.email});

    return user;
});

Meteor.startup(function(){

    // Set interval for users online
    Meteor.setInterval(function() {
        Meteor.users.update({'profile.lastPing': {$gte: getValidOnlineDate()}}, {$set: {'profile.online': true}});
        Meteor.users.update({'profile.lastPing': {$lt: getValidOnlineDate()}}, {$set: {'profile.online': false}});
    }, 10000);

});
