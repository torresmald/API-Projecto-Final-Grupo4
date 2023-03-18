const mongoose = require('mongoose');

const notificationsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: { type: Date, required: true },
    description: String,
    student: [{ type: mongoose.Types.ObjectId, ref: 'Student' }]
},
    {
        timestamps: true
    }
);

const Notification = mongoose.model('Notification', notificationsSchema);

module.exports = Notification;