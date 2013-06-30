

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



Template.loop_item.helpers({
    alreadyChosen: function(){
        var loopsArr = Meteor.call('getChosenLoops', Session.get('current_roomId'));
        return ( loopsArr.indexOf( Session.get('current_loopId') ) > 0 );
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
            volume: 50
        });
    },
    "click .choose-loop": function(evt){
        evt.preventDefault();
        var loop = $(evt.target).closest('a').data('loop');

    }
});
