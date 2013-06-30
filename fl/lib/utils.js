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
