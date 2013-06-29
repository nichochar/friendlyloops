###
CLIENT APP MAIN THREAD
vim: ts=4 sw=4 et :
###

Session.set 'initialLoad', true

# Users
Meteor.subscribe 'currentUser'
Meteor.subscribe 'allUsers'

# Rooms
Meteor.subscribe 'rooms'

# Loops
Meteor.subscribe 'loops'
