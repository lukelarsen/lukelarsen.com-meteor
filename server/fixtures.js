if (Posts.find().count() === 0) {
    Posts.insert({
        title: "First Fixture Post",
        date: "1/13/2014",
        image: "01-let-it-begin",
        intro: "The small intro to this post here.",
        content: "And here is the main content of this post. I will be great."
    });

    Posts.insert({
        title: "Second Fixture Post",
        date: "1/17/2014",
        image: "02-installing-node",
        intro: "Second - The small intro to this post here.",
        content: "Second - And here is the main content of this post. I will be great."
    });

    Posts.insert({
        title: "Third Fixture Post",
        date: "1/24/2014",
        image: "03-brushing-up-on-js",
        intro: "Third - The small intro to this post here.",
        content: "Third - And here is the main content of this post. I will be great."
    });
}