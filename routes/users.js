var express = require('express');
var router = express.Router();
const sqlConnection = require("../config/sql-connection")

const userRouter = require('../routers/user/user')



router.post('/register-user', async (req, res, next)=>{

  const name = req.body.name
  const phone = req.body.phone
  const email = req.body.email
  const age = req.body.age
  const password = req.body.password
  const createdAt = "2023-01-10 17-01-00"
  const updatedAt = "2023-01-10 17-01-00"

  // if (req.userStatus){
  //   res.status(400).send("USER_ALREADY_EXIST")
  //   return
  // }

    try {
      const query = "INSERT INTO users (`name`, `email`, `password`, `age`, `phone`,`createdAt`, `updatedAt`) VALUES('"+name+"', '"+email+"','"+password+"',"+age+",'"+phone+"', '"+createdAt+"','"+updatedAt+"' )"
      const result = await sqlConnection.query(query).then((result, error)=>{
        console.log(result)
        if (!error){
          res.status(201).json({status: true, message: "user Created Successfully", user: req.body})
          return
        }
        res.json({status: false, message: "Cannot Created."})

      })
    }catch (e){
      res.status(403).send(e)
    }


});
router.use("/user", userRouter)




module.exports = router;
