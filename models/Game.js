const mongoose = require("mongoose");

const { Schema } = mongoose;

const GameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Game = mongoose.model("Game", GameSchema);

module.exports = {
    Game,
    GameSchema
};
