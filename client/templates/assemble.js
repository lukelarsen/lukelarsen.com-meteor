Template.assemble.rendered = function() {
    Meteor.defer(function() {
        $('.animate--fadein').removeClass("animate--fadein");
        $.scrollTo('#js-page-top', 0);
    });
};