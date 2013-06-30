###
SHARED MONGO COLLECTIONS
vim: ts=4 sw=4 et :
###

#We also use the user collection, pre-implemented
Rooms = new Meteor.Collection 'rooms'
Loops = new Meteor.Collection 'loops'



if Meteor.isServer
    ### USERS ###
    Meteor.publish 'currentUser', ->
        Meteor.users.find @userId

    # Limit what we publish to clients
    Meteor.publish 'allUsers', ->
        #if @userId and isAdminById(@userId) then Meteor.users.find()   # if user is admin, publish all fields
        #else
        Meteor.users.find {},
            fields:
                secret_id: false
                isAdmin: false
                emails: false
                notifications: false
                'profile.email': false
                'services.twitter.accessToken': false
                'services.twitter.accessTokenSecret': false
                'services.twitter.id': false
                'services.facebook.accessToken': false
                'services.facebook.accessTokenSecret': false
                'services.facebook.id': false
                'services.password': false
            

    # Allow any client to create a user account
    # Restrict update and remove to that specific user 
    #TODO give ability to an admin later
    Meteor.startup ->
        Meteor.users.allow
            insert: (userId, doc) ->
                true

            update: (userId, doc, fields, modifier) ->
                (doc._id and doc._id is userId)

            remove: (userId, doc) ->
                (doc._id and doc._id is userId)
                



    ### ROOMS ###
    #Rooms = new Meteor.Collection 'rooms'

    Meteor.publish 'rooms', -> Rooms.find()
    Meteor.publish 'room', (roomId) -> Rooms.find(roomId)


    # All all users to create a room
    #TODO restrict room update and removal to its owner
    Meteor.startup ->
        Rooms.allow
            insert: (userId, doc) ->
                true
            update: (userId, doc) ->
                (doc._id and doc._id is userId)
            remove: (userId, doc) ->
                (doc._id and doc._id is userId)





    ### ALERTS ###
    #Meteor.publish 'alerts', -> Alerts.find()


if Meteor.isClient
    # Users
    Meteor.subscribe 'currentUser'
    Meteor.subscribe 'allUsers'

    # Rooms
    Meteor.subscribe 'rooms'

    # Loops
    Meteor.subscribe 'loops'

