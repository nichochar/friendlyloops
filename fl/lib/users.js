/*
 * COMMON, GLOBAL USER FUNCTIONS
 */

isAdminById=function(userId){
    var user = Meteor.users.findOne(userId);
    return user && isAdmin(user);
};

isAdmin=function(user){
    if(!user || typeof user === 'undefined')
        return false;
    return !!user.isAdmin;
};

adminUsers = function(){
    return Meteor.users.find({isAdmin : true}).fetch();
};

getDisplayName = function(user) {
    if (user.profile && user.profile.name) {
        return user.profile.name;
    } else {
        return user.username;
    }
};
getDisplayNameById = function(userId){
    return getDisplayName(Meteor.users.findOne(userId));
};
getFacebookName = function(user) {
    try {
        return user.services.facebook.username;
    } catch (e) {

    }
};

getFacebookNameById = function(userId) {
    return getFacebookName(Meteor.users.findOne(userId));
};

getAvatarUrl = function(user) {
    if (user.services.facebook) {
        return "http://graph.facebook.com/" + user.services.facebook.screenName + "/picture";
    }
};



//var MAIN_THREAD_NAME = "main";
//var SERVER_USERID = "_";
// delay, for how long a client does not have to have updated it's ping to still be considered online
var LASTPING_DELAY = 10000; // in ms


getValidOnlineDate = function() {
    return new Date().getTime() - LASTPING_DELAY;
};

getOnlineUsersCount = function() {
    var validPingDate = new Date().getTime() - LASTPING_DELAY;
    return Meteor.users.find({
        'profile.lastPing': { $gte: validPingDate },
    }).count();
};

getOnlineUsersCountThread = function(name) {
    var validPingDate = getValidOnlineDate();
    return Meteor.users.find({
        'profile.currentThread': name,
        'profile.lastPing': { $gte: validPingDate }
    }).count();
};
