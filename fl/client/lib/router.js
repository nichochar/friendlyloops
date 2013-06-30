/*
   METEOR(ITE) ROUTER - CLIENT
vim: ts=4 sw=4 et :
*/

(function() {
    var route404, routeArtist, routeArtists, routeHome, routeLoop, routeLoops, routeRoom, routeRooms, routeUser, routeUsers, showView;
    showView = function(view, options) {
        console.log('ROUTER: showView :: ', view, ', options::', options);
        if (options && (page in options) && !!options.page.toFixed()) {
            Session.set('current_page', options.page);
        } else {
            Session.set('current_page', 0);
        }
        Session.set('current_view', view);
        return view;
    };
    route404 = function() {
        return showView('404');
    };
    routeHome = function() {
        return showView('home_page', {
            type: 'home'
        });
    };
    routeLoop = function(loopId) {
        Session.set('current_loopId', loopId);
        return showView('loop_page', {
            type: 'loops'
        });
    };
    routeLoops = function(page) {
        return showView('loops_page', {
            page: page,
            type: 'loops'
        });
    };
    routeUser = function(userId) {
        Session.set('current_userId', userId);
        return showView('user_page', {
            type: 'users'
        });
    };
    routeUsers = function(page) {
        return showView('users_page', {
            page: page,
            type: 'users'
        });
    };
    routeRoom = function(roomId) {
        Meteor.subscribe('room', roomId);
        Session.set('current_roomId', roomId);
        return showView('room_page', {
            type: 'rooms'
        });
    };
    routeRooms = function(page) {
        Meteor.subscribe('rooms');
        return showView('rooms_page', {
            page: page,
            type: 'rooms'
        });
    };
    routeArtist = function(artistId) {
        Session.set('current_artistId', artistId);
        return showView('artist_page', {
            type: 'artists'
        });
    };
    routeArtists = function(page) {
        return showView('artists_page', {
            page: page,
            type: 'artists'
        });
    };
    routeUser = function(userId) {
        Session.set('current_userId', userId);
        return showView('user_page', {
            type: 'users'
        });
    };
    routeUsers = function(page) {
        return showView('users_page', {
            page: page,
            type: 'users'
        });
    };
    Meteor.Router.add({
        '/': routeHome,
        '/home': routeHome,
        '/rooms': routeRooms,
        '/rooms/:id': routeRoom,
        '/loops': routeLoops,
        '/users': routeUsers,
        '/users/:id': routeUser
    });
    return Meteor.startup(function() {
        return Deps.autorun(function() {
            return Meteor.Router.page();
        });
    });
})();

