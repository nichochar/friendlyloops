Rooms = new Meteor.Collection 'rooms'
Loops = new Meteor.Collection 'loops'

#console.log Meteor.Router.page()
#analyticsRequest()      # Track page routing (client side pushState so need to do this manually)

# Users
Meteor.subscribe 'currentUser'
Meteor.subscribe 'allUsers'

# Rooms
Meteor.subscribe 'rooms'


# Loops
Meteor.subscribe 'loops'

