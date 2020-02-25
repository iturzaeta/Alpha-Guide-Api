const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
        },
        greeting: {
            type: String,
            required: true
        },

        image_cover: {
            type: String,
            required: true
        },

        currency: {
            type: String,
            required: true
        },

        docCode: {
            type: Number,
            unique: true,
            required: true
        },

        healthCode: {
            type: Number,
            unique: true,
            required: true
        },

        plugs: {
            type: Object
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


const Country = mongoose.model('Country', countrySchema);
module.exports = Country;