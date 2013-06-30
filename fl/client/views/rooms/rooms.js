

/*
 * ROOMS PAGE
 */
Template.rooms_page.helpers({
    rooms : function() {
        var i, room, tmpRooms, _i, _len, _ref, _ref1;
        tmpRooms = Rooms.find().fetch();
        for (i = _i = 0, _len = tmpRooms.length; _i < _len; i = ++_i) {
            room = tmpRooms[i];
            tmpRooms[i].currentPlayerCount = (_ref = room.players) != null ? _ref.length : void 0;
            tmpRooms[i].isFull = ((_ref1 = room.players) != null ? _ref1.length : void 0) >= 3;
        }
        return tmpRooms;
    }
});

Template.rooms_page.events({
    'click #create-room-btn': function() {
        var newRoomId;
        newRoomId = Rooms.insert({
            name: $("#create-room-input").val()
        });
        Meteor.call('joinRoom', newRoomId);
        window.location.href = '/loops';
        //return window.location.href = '/rooms/' + newRoomId;
    },
});

Template.room_list_item.events({
    'click .join-room-link': function(evt){
        evt.preventDefault();
        var roomId = $(evt.target).data('room');
        Meteor.call('joinRoom', roomId);
        window.location.href = '/rooms/'+roomId;
    },
    'click .delete-room-link': function(evt){
        evt.preventDefault();
        var roomId = $(evt.target).data('room');
        Meteor.call('deleteRoom', roomId);
    }
});

/*
 * ROOM PAGE
 */
Template.room_page.helpers({
    room: function() {
        return Rooms.findOne(Session.get('current_roomId'));
    }
});




/*
 * ROOM CHAT
 */
Template.room_chat.events({
    'click #button-sendMessage': function(){
        Meteor.call('addComment', Session.get('current_roomId'), $("#input-chat").val() );
    } 
});
