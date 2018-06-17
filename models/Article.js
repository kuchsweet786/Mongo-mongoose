
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    },
    summary: {
        type: String,
    },
    byline: {
        type: String,
    },
    note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

// Create the Article
var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;