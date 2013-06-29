###
USER FUNCTIONS - COMMON
vim: ts=4 sw=4 et :
###


getDisplayName = (user) ->
    (if (user.profile and user.profile.name) then user.profile.name else user.username)


getFacebookName = (user) ->
    try
        return user.services.facebook.username
    catch e
        return


getFacebookNameById = (userId) ->
    getFacebookName Meteor.users.findOne(userId)


getAvatarUrl = (user) ->
    if getSignupMethod(user) is "facebook"
        "http://graph.facebook.com/" + user.services.facebook.screenName + "/picture"
