Meteor.publish('posts', function(options) {
    return Posts.find({}, options);
});

Meteor.publish('postSingle', function(id) {
    return id && Posts.find(id);
});