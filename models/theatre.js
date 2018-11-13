require('./theatre-db.js');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

TheaterSchema = new Schema ({
    name: String,
    seats: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ],
    seatsAvailable: Number,
})

module.exports = mongoose.model("Theater", TheaterSchema);
