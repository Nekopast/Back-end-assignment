const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
        unique: false
    },
    genre: {
        type: String,
        required: true,
        unique: false
    }
});

const Anime = mongoose.model("anime", animeSchema);
module.exports = Anime;