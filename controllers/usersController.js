const User = require('../models/user.model')
const createError = require('http-errors')
const email = require('../config/mail.config')


////////////////////CREATE USER//////////////////////////

module.exports.create = (req, res, next) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        image: req.file ? req.file.url : undefined,
        country: req.body.country,
        username: req.body.username
    })
    

    user.save()
        .then((user) => {
            email.sendValidateEmail(user)
            res.json(user)
        })
        .catch(next)
}




///////////////////////VALIDATE USER/////////////////////
module.exports.validate = ( req, res, next ) =>{
    User.findOneAndUpdate({ validateToken: req.params.token })
    .then((user) => {
        if(user.validated){ //Check Validated and redirect
            res.send(`<h1>This email has been already validated</h1>`)

        } else {
        user.validated = true;
        user.save()
        .then(() =>{
            res.json(user)
        })}
    })
    .catch(err => {console.log(err)})

    // User.findOneAndUpdate({validateToken: req.params.validateToken}, {validate: true}, {new: true})
    // .then(user => res.status(200).json(user))
    // .catch(next)
}





////////////////////////////GET ALL USERS/////////////////////////////

module.exports.getAll= (req, res, next) => {

    const user = req.params.id
    
    User.find( { user } )
        .then(user => {
            res.json(user)
        })
        .catch(next)
}


///////////////////////GET ONE USER///////////////////////////

module.exports.getOne = (req, res, next) => {
     
    const id = req.params.id

    User.findById(id)
        .then(user => {
            res.json(user)
        })
        .catch(next)
}


///////////////////////EDIT USER///////////////////////////

module.exports.edit = (req, res, next) => {

    
    const id = req.params.id
    const user = req.body

    User.findByIdAndUpdate(id, user, {new: true})
        .then(user => {
            if(!user) {
                res.json({message: "User not found"})
            }else{
                res.json(user)
            }
        }).catch(next)
}

//////////////////////LOGIN////////////////////////////

module.exports.login = (req, res, next) => {
    const {email, password} = req.body
    if(!email || !password){
        return res.json({message: 'email and password required'})
    }
    User.findOne({ email: email, validated: true})
        .then(user => {
            if(!user) {
                res.json({message: 'User not found'})
            }else{
               return user.checkPassword(password)
                .then(match => {
                    if(match){
                    req.session.user = user;
                    //res.json(user)
                    res.json('login ok :D')
        
                }else{
                    res.json({message: 'User not found'})
                }
                })
            }
        }).catch(next)
}


///////////////////////////LOG OUT/////////////////////////

module.exports.logout = (req, res) => {
    req.session.destroy();
    res.clearCookie("connect.sid") //destroy cookie nav
    res.json('logout succeded');
}


///////////////////////////DELETE USER/////////////////////////

module.exports.delete = (req, res, next) => {

  
    User.findByIdAndDelete(req.params.id) //AQUI PONER req.
    .then(() =>{
      req.session.destroy() //destroy session to server
      res.clearCookie("connect.sid") //destroy cookie nav
      res.json('delete completed! :D')
    })
    .catch(err => next(err))
  
  }

