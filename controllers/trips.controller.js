const Trip = require('../models/trip.model')
const createError = require('http-errors')


module.exports.create = (req, res, next) => {
    console.log(req.currentUser)
    
    const trip = new Trip ({
        country: req.body.country,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        user: req.currentUser.id
    })

    trip.save()
        .then((trip) => {
            res.json(trip)
        })
        .catch(next)
}



module.exports.edit = (req, res, next) => {
    const id = req.params.id
    req.body

    console.log({ id })

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
