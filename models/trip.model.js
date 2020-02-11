const mongoose = require('mongoose');



const tripSchema = new moongose.Schema({

    country: {
        type: String
    },

    start_date: {
        type: Date,
        required: true
    },

    end_date: {
        type: Date,
        required: true
    },

    trip_days: {
        type: Number,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

})



const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;