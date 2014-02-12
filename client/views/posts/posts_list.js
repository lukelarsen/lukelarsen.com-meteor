Template.postsList.helpers({
    hasMorePosts: function() {
        this.posts.rewind();
        return Router.current().limit() == this.posts.fetch().length;
    }
});

Template.postsList.rendered = function(){
    Meteor.defer(function() {
        $('.animate--fadein').removeClass("animate--fadein");
    });
};