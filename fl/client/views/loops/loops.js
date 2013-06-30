





Template.loops_page.helpers({

    loops: function(){
        var loopsArr = Loops.find().fetch();
        
        // Create arrays with keys of the loop's instrument
        for(var i = 0; i < loopsArr.length; i++){
            var instrument = loopsArr[i].instrument;
            if(typeof loopsArr[instrument] === 'undefined') loopsArr[instrument] = [];
            loopsArr[instrument].push( loopsArr[i] );
        }

        console.log( loopsArr );
        
        return loopsArr;
    },

});



Template.loop_item.helpers({
    alreadyChosen: function(){
        var loopsArr = Meteor.call('getChosenLoops', Session.get('current_roomId'));
        return ( loopsArr.indexOf( Session.get('current_loopId') ) > 0 );
    },
    misc: function(){
        var loop = Loops.findOne( Session.get('current_loopId') );
        return (loop.instrument === 'misc' );
    }
});



Template.loop_item.events({
    "click .play-loop": function(evt){
        evt.preventDefault();
        var loop = Loops.findOne( $(evt.target).data('loop') );
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
