const Trip = require('../models/trip.model')
const createError = require('http-errors')
const Country = require('../models/country.model')
const countries = require('../bin/seeds')
const geodist = require('geodist')


///////////////////////////// CREATE /////////////////////////////////

module.exports.create = (req, res, next) => {
    const origin = {
        lat: req.params.lat,
        lon: req.params.lon
    }
    
    Country.findOne({ name: req.body.country })
        .then (country => {
            if(!country) {
                throw createError(404, 'Country not found')
            } else {
                let destiny = country.coordinates
                console.log('TODOOOOOOO', geodist(origin, destiny, {exact: true, unit: 'km'}))
                const trip = new Trip ({
                    country: country,
                    start_date: req.body.start_date,
                    end_date: req.body.end_date,
                    user: req.currentUser.id,
                    tripDays: req.body.tripDays,
                    tripKm: geodist(origin, destiny, {exact: true, unit: 'km'})
                })
                return trip.save()
            } 
        })
        .then((trip) => {
            res.json(trip)
        })
        .catch(next)
}

///////////////////////////////// EDIT ////////////////////////////

module.exports.edit = (req, res, next) => {
    const id = req.params.id
    req.body


    Trip.findById(id)
        .populate('user')
        .then(trip => {
            if(!trip) {
                throw createError(404, 'Trip not found')
            } else{
                if (trip.user.id === req.currentUser.id) {
                    Object.keys(req.body).forEach(key => {
                        trip[key] = req.body[key]
                    })
                    return trip.save()
                } else {
                    throw createError(403, 'You are not allowed')
                }
            }
        })
        .then(editedTrip => {
            res.json(editedTrip)
        })
        .catch(next)
}

///////////////////////////////// FIND ONE ////////////////////////////

module.exports.findTrip = (req, res, next) => {
     
    const id = req.params.id

    Trip.findById(id)
        .populate('country')
        .populate('user')
        .populate({
            path: 'trips',
            populate: {
                path: 'country'
            }
        })
        .then(trip => {
            res.json(trip)
            // console.log("TRIP DEL BACK =>", trip)
        })
        .catch(next)
}

