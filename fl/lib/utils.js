/*
 * GLOBAL UTILITY FXNS
 */



findLast = function(user, collection){
    return collection.findOne({userId: user._id}, {sort: {createdAt: -1}});
};

timeSinceLast = function(user, collection){
    var now = new Date().getTime();
    var last = findLast(user, collection);
    if(!last)
        return 999; // if this is the user's first post or comment ever, stop here
    return Math.abs(Math.floor((now-last.createdAt)/1000));
};

numberOfItemsInPast24Hours = function(user, collection){
    var mDate = moment(new Date());
    var items=collection.find({
        userId: user._id,
        createdAt: {
            $gte: mDate.subtract('hours',24).valueOf()
        }
    });
    return items.count();
};



// Returns "digit" numbers ( 0->00, 9->09, 10->10, ...)
function makeDigit(string) {
    if ( string < 10 || string.length < 2 )
    string = "0" + string;
    return string;
}
// Returns the time stamp of the time in
function getTimeStampFromTime(time) {
    var date = new Date(time);
    var string = "";

    var currDate = new Date();
    // if it is not the same day, we include the date of course
    if (date.getYear() != currDate.getYear() ||
        date.getMonth() != currDate.getMonth() ||
            date.getDay() != currDate.getDay() ) {

        string += makeDigit(date.getDate());
        string += "." + makeDigit( date.getMonth() + 1 );
        string += "." + ( date.getYear() + 1900 );
        // append space so the time is neatly aligned
        string += " ";
    }

    string += makeDigit(date.getHours());
    string += ":" + makeDigit(date.getMinutes());
    string += ":" + makeDigit(date.getSeconds());

    return string;
}
