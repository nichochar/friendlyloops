###
SHARED MONGO COLLECTIONS
vim: ts=4 sw=4 et :
###

#We also use the user collection, pre-implemented
Rooms = new Meteor.Collection "rooms"
Loops = new Meteor.Collection "loops"

console.log( Rooms )
