
Template.room_page.helpers({
    room: function() {
        return Rooms.findOne(Session.get('current_roomId'));
    }
});

Template.rooms_page.rooms = function() {
    var i, room, tmpRooms, _i, _len, _ref, _ref1;
    tmpRooms = Rooms.find().fetch();
    for (i = _i = 0, _len = tmpRooms.length; _i < _len; i = ++_i) {
        room = tmpRooms[i];
        tmpRooms[i].currentPlayerCount = (_ref = room.players) != null ? _ref.length : void 0;
        tmpRooms[i].roomFull = ((_ref1 = room.players) != null ? _ref1.length : void 0) >= 3;
    }
    return tmpRooms;
};

Template.rooms_page.events({
    'click #create-room-btn': function() {
        var newRoomId;
        newRoomId = Rooms.insert({
            name: $("#create-room-input").val()
        });
        Meteor.call('joinRoom', newRoomId);
        return window.location.href = '/rooms/' + newRoomId;
    }
});
