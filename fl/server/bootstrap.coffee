


sampleRooms = [
    {
        name: "Jam laboratory",
        players: [
            {
                _id: "x79Qf9i3APqpYAobM"
            }

        ],
        ownerId: "x79Qf9i3APqpYAobM"
    },


]

sampleLoops = [
    {
        name: "test loop",
        length: 12,
        url: "/loops/ck-part-1-hhat.mp3"
    }
]


insertSampleRooms = ->
    for room, i in sampleRooms
        Rooms.insert(room)

insertSampleLoops = ->
    for myLoop, i in sampleLoops
        Loops.insert(myLoop)


insertSampleData = ->
    insertSampleRooms()
    insertSampleLoops()

flushSampleData = ->
    Rooms.remove({})
    Loops.remove({})

#Meteor.startup ->
if Rooms.find().count() is 0
    flushSampleData()
    insertSampleData()
