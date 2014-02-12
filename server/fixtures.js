if (Posts.find().count() === 0) {
    Posts.insert({
        title: "Let It Begin",
        number: 0,
        date: "09/01/2013",
        image: "01-let-it-begin",
        intro: "Intro Text",
        content: "Post Text"
    });
}