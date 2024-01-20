const express = require("express")
const router = express.Router()
const {authentication, authorization} = require("./user-middleware");


// router.post("/login", authentication, authorization,(req, res)=>{
//     res.json(req.body)
// })

router.post("/login", authentication, authorization,(req, res)=>{
    // res.send({"body": req.body})
})

module.exports = router