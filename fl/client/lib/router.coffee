###
METEOR(ITE) ROUTER - CLIENT
vim: ts=4 sw=4 et :
###

# Wrap in a closure to not pollute global namespace and b/c it can act standalone
do ->

    showView = (view, options) ->
        console.log 'ROUTER: showView :: ', view, ', options::', options
        if options and (page of options) and !!options.page.toFixed()
            Session.set('current_page', options.page)
        else Session.set('current_page', 0)
        Session.set('current_view', view)

        view
            #Deps.flush()    # Flush all new dependencies
        #else route404      # Route to 404 page if user does not have permissions to view this page


    route404 = ->
        showView '404'

    routeHome = ->
        showView 'home_page', { type: 'home' }

    # loop Routes
    routeLoop = (loopId) ->
        Session.set('current_loopId', loopId)
        showView 'loop_page', { type: 'loops' }

    routeLoops = (page) ->
        showView 'loops_page', { page: page, type: 'loops' }

    # user Routes
    routeUser = (userId) ->
        Session.set('current_userId', userId)
        showView 'user_page', { type: 'users' }

    routeUsers = (page) ->
        showView 'users_page', { page: page, type: 'users' }


    # room Routes
    routeRoom = (roomId) ->
        Session.set('current_roomId', roomId)
        showView 'room_page', { type: 'rooms' }

    routeRooms = (page) ->
        showView 'rooms_page', { page: page, type: 'rooms' }


    # Artist Routes
    routeArtist = (artistId) ->
        Session.set('current_artistId', artistId)
        showView 'artist_page', { type: 'artists' }

    routeArtists = (page) ->
        showView 'artists_page', { page: page, type: 'artists' }


    # User Routes
    routeUser = (userId) ->
        Session.set('current_userId', userId)
        showView 'user_page', { type: 'users' }

    routeUsers = (page) ->
        showView 'users_page', { page: page, type: 'users' }



    # Setup our app's url routes
    Meteor.Router.add
        '/'                         : routeHome
        '/home'                     : routeHome
        '/rooms'                    : routeRooms
        '/rooms/:id'                : routeRoom
        '/loops'                    : routeLoops
        '/users'                    : routeUsers
        '/users/:id'                : routeUser

    # Filter what pages can be accessed by users and client status
    #Meteor.Router.filters
        #isAdmin : (page) ->
            #if isAdmin(Meteor.user()) then page else 'restricted'

        
    #Meteor.Router.filter 'isAdmin',
        #only: 'admin_page'


Meteor.startup ->
    Meteor.autorun ->
        #console.log Meteor.Router.page()
        Meteor.Router.page()    # Reactive variable = re-run on page change
        #analyticsRequest()      # Track page routing (client side pushState so need to do this manually)
        

