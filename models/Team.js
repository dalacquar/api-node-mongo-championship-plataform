const mongoose = require("mongoose");

const { Schema } = mongoose;

const TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game",
        required: true
    },
    image: {
        type: String,
        required: false
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }]
}, { timestamps: true });

const Team = mongoose.model("Team", TeamSchema);

module.exports = {
    Team,
    TeamSchema
};
