const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    name: {
        type: String,
    },
    location: {
        type: String,
    },
    image: {
        type: String
    },
});
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;