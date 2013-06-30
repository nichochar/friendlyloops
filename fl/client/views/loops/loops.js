

Template.loops_page.helpers({
    drumLoops: function(){
        return Loops.find({ instrument: "drums" }).fetch(); 
    },
    guitarLoops: function(){
        return Loops.find({ instrument: "guitar" }).fetch();

    },
    bassLoops: function(){
        return Loops.find({ instrument: "bass" }).fetch();

    },
    voxLoops: function(){
        return Loops.find({ instrument: "vox" }).fetch();

    },

    miscLoops: function(){
        return Loops.find({ instrument: "misc" }).fetch();
    }

});


//Template.loop_item.rendered
Template.loop_item.helpers({
    alreadyChosen: function(){
        var loopsArr = Meteor.call('getChosenLoops', Session.get('current_roomId'));
        var chosenLoops = Rooms.find( Session.get("current_roomId") ).map( function(val, i){
            return val.playerLoops;    
        });

        return ( chosenLoops.indexOf( this ) > 0 );

    },
    misc: function(){
        var loop = Loops.find( Session.get('current_loopId') );
        return (loop.instrument === 'misc' );
    }
});



Template.loop_item.events({
    "click .play-loop": function(evt){
        evt.preventDefault();
        console.log( $(evt.target).closest('a').data('loop') );
        var loop = Loops.findOne( $(evt.target).closest('a').data('loop') );
        console.log( loop );
        var mySound = soundManager.createSound({
            id: loop._id,
            url: loop.url,
            autoLoad: true,
            volume: 100
        });
        mySound.play();
    },
    "click .choose-loop": function(evt){
        evt.preventDefault();
        var loopId = $(evt.target).closest('a').data('loop');
        var loop = Loops.find( loopId );
        Session.set("my_chosen_loops", Session.get("my_chosen_loops").push( loop )); 
        console.log( Session.get('current_roomId') );
        Meteor.call('chooseLoop', this, Session.get('current_roomId'));

    }
});
