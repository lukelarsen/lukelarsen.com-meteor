// Because of the reactivity of Meteor we have to load the picturefill after the template has rendered.
Template.postSingle.rendered = function() {
    window.picturefill();
    Meteor.defer(function() {
        $('.animate--fadein').removeClass("animate--fadein");
        $.scrollTo('#js-page-top', 400);
    });
};