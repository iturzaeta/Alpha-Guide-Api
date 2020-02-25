const Country = require('../models/country.model')

module.exports.getAll= (req, res, next) => {

        Country.find()
        .then(country => {
            res.json(country)
        })
        .catch(next)
}


module.exports.getOne = (req, res, next) => {
     
    const id = req.params.id

    Country.findById(id)
        .then(country => {
            res.json(country)
        })
        .catch(next)
}

module.exports.getAll = (req, res, next) => {
     
    Country.find()
        .then(countries => {
            console.log(countries)
            res.json(countries)
        })
        .catch(next)
}
