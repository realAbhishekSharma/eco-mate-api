const sqlConnection = require("../../config/sql-connection")
const jwt = require("jsonwebtoken");
const User = require('../../models/User')


function checkUser(req, res, next){
    const username = req.body.username
    const query = "SELECT * FROM user where username = '"+username+"'"
    sqlConnection.query(query).then((err, data)=>{
        if (!data[0]){
            req.userStatus = false

        }else {
            req.userStatus = true
        }
        next()
    })

}

async function authentication(req,res,next){
    console.log(req.body)
    const email = req.body.email
    const password = req.body.password

    const query = "SELECT * FROM users WHERE email ='"+email+"' AND password = '"+password+"'"

    const data = await User.findOne({
        where : {
            email: email,
            password: password
        }
    }).then((data)=>{
        if (data == null){
            res.status(400).json({status : false, message:"USERNAME_OR_PASSWORD_NOT_FOUND"})
        }else {
            req.user = data.dataValues
            next()
        }
    })

}

function authorization(req, res, next){
    jwt.sign(req.user, process.env.JWT_SIGNATURE_TOKEN, {expiresIn: 60000}, (err, token)=>{
        if (!err) {
            res.json({status: true, message: "authorized successfully.", user: req.user, token: token})
        }
    })

}

function verifyToken(req, res, next){
    const token = req.header('authorization')
    if (!token){
        res.status(400).json({status : false, message:"TOKEN_NOT_FOUND"})
        return
    }

    jwt.verify(token.split(" ")[1], process.env.JWT_SIGNATURE_TOKEN, {expiresIn: 60000}, (err, detail)=>{
        if (!err){
            req.details = detail
            next()
        }else {
            console.log("session expired.")
            res.status(403).json({status : false, message:"SESSION_EXPIRE"})
        }
    })
}

function hashOTP(req, res, next){
    // jwt.sign(req.otp, process.env.JWT_SIGNATURE_TOKEN, {expiresIn: 10000}, (err,data)=>{
    //
    // })
}

function getCurrentDateTime(){
    const date = new Date()
    const month = date.getMonth() + 1
    return date.getFullYear() + "-" + month + "-" + date.getDate() + " " + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds()
}


module.exports = {authentication, authorization,verifyToken, getCurrentDateTime}