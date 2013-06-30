# Functions and template helpers for room pages & items

Template.room_page.helpers
    room : ->
        Rooms.findOne( Session.get('current_roomId') )

Template.rooms_page.helpers
    rooms: ->
        tmpRooms = Rooms.find().fetch()
        for room, i in tmpRooms
            tmpRooms[i].currentPlayerCount = room.players?.length
            tmpRooms[i].roomFull = (room.players?.length >= 3)
        tmpRooms

Template.rooms_page.events
    'click #create-room-btn': ->
        newRoomId = Rooms.insert
            name: $("#create-room-input").val()
        window.location.href = '/rooms/'+newRoomId


Template.room_page.helpers
    roomName: ->
      Session.get('current_roomId')
