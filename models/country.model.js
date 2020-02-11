const moongose = require('mongoose')

const countrySchema = new moongose.Schema({

    name: {
        type: String,
        required: true
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

    plugs: {
        type: Object,
        required: true
    }
})

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;