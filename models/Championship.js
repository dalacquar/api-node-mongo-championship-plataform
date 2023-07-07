const mongoose = require("mongoose");

const { Schema } = mongoose;

const ChampionshipSchema = new Schema({
    name: { type: String, required: true },
    start_time: { type: Date, required: true },
    min_teams: { type: String, required: true },
    max_teams: { type: String, required: true },
    admin_id: { type: String, required: true },
    prizes: { type: String, required: true },
    format: { type: String, required: true },
    rules: { type: String, required: true },
    contact: { type: String, required: true },
    game_id: { type: String, required: true },
    visibility: { type: String, required: true }
}, { timestamps: true });

