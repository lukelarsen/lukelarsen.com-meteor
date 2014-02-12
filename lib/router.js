Router.configure({
    layoutTemplate: 'layoutPosts',
    loadingTemplate: 'loading',
    waitOn: function() {

    }
});

PostsListController = RouteController.extend({
    template: 'postsList',
    increment: 5,
    limit: function() {
        return parseInt(this.params.postsLimit) || this.increment;
    },
    findOptions: function() {
        return {sort: {number: -1}, limit: this.limit()};
    },
    waitOn: function() {
        return Meteor.subscribe('posts', this.findOptions());
    },
    posts: function() {
        return Posts.find({}, this.findOptions());
    },
    data: function() {
        var hasMore = this.posts().fetch().length === this.limit();
        var nextPath = this.route.path({postsLimit: this.limit() + this.increment});
        return {
            posts: this.posts(),
            nextPath: hasMore ? nextPath : null
        };
    }
});

Router.map(function() {

    // Home Page
    this.route('home', {
        path: '/',
        layoutTemplate: 'layout'
    });

    // RSS Feed
    this.route('rss', {
        where: 'server',
        path: '/feed.xml',
        action: function() {
            var feed = new RSS({
                title: 'Adventures of a Designer Learning to Program',
                description: 'Posts of a designer fumbling through the process of learning backend development.',
                feed_url: 'http://lukelarsen.meteor.com/feed.xml',
                site_url: 'http://lukelarsen.meteor.com',
                author: 'Luke Larsen'
            });
            Posts.find({}, {sort: {number: -1}, limit: 20}).forEach(function(post){
                feed.item({
                    title: post.title,
                    intro: post.intro,
                    date: post.date,
                    url: '/posts/' + post._id
                })
            });
            this.response.write(feed.xml());
            this.response.end();
        }
    });

    // Single Post
    this.route('postSingle', {
        path: '/posts/:_id',
        layoutTemplate: 'layoutPostSingle',
        waitOn: function() {
            return [
                Meteor.subscribe('postSingle', this.params._id)
            ];
        },
        data: function() { return Posts.findOne(this.params._id); }
    });

    // Post List
    this.route('postsList', {
        path: '/post-list/:postsLimit?',
        controller: PostsListController
    });
});