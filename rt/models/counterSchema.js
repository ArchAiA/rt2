const mongoose = require('mongoose');

const rtDocSchema = mongoose.Schema({
    sr: Number,
    o: Number,
    pr: Number,
    fr: Number,
    ps: Number,
});

module.exports = mongoose.model('Counts', counterSchema);


