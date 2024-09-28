const mongoose = require('mongoose');

const labAssignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    fileUrl: {
        type: String,
        required: true,
    },
    uploadedBy: {
        type: String,
        required: true,
    },
    courseId: {
        type: String,
        required: true,
    },

    submissions: [{
        studentemail: { type: String },
        submissionFileUrl: { type: String },
        submittedAt: { type: Date }
    }]
}, { timestamps: true });

const LabAssignment = mongoose.model('labAssignment', labAssignmentSchema);

module.exports = {LabAssignment};
