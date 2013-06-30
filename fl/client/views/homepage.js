
//Template.home_page.rendered = function(){


//};

Template.home_page.created = function(){
    

};

Template.home_page.events({
    'click #fbConnect' : function(evt){

        Meteor.loginWithFacebook({

        }, function(err){
            if(err){
                console.log("ERROR logging in with facebook" + err);
            } else {
                console.log("Logged in with facebook");
                Session.set('current_page', 'rooms_page');
                window.location.href = window.location.origin + '/rooms';
            }
        });

    }
});
