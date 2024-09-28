const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    Postedat: {
        type: Date,
        required: true,
    },
    courseId: {
        type: String,
        required: true,
    },
    announcementBy: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const Announcementmodel = mongoose.model('announcement', announcementSchema);

module.exports = Announcementmodel;
