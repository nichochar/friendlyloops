var getAvatarUrl, getDisplayName, getFacebookName, getFacebookNameById;

getDisplayName = function(user) {
    if (user.profile && user.profile.name) {
        return user.profile.name;
    } else {
        return user.username;
    }
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
