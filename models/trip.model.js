const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema(
    
    {
        country: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Country',
            required: true  
        },
        start_date: {
            type: Date
        },

        end_date: {
            type: Date
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }

    },

    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                ret.id = doc._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            }
        }
    }

)



const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;