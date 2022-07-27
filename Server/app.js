const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;
const mongoose =  require("mongoose");
const User = require("./models/User");
const cors = require("cors");
const bcrypt = require('bcrypt');
mongoose.connect("mongodb+srv://Ankit9442:Ankitrawat9442@cluster0.tqs5b.mongodb.net/?retryWrites=true&w=majority" , {
    useNewUrlParser : true
}).then(console.log("mongoose connected ....")).catch((err)=>console.log(err));



const newUser = new User( {
  StudentID : "12345",
  password : "Ankit@123" 
});
bcrypt.genSalt(saltRounds, function (err, salt) {
  // generating salt for the user password
  bcrypt.hash(newUser.password, salt, function (err, hash) {
      // returns hash
       newUser.password = hash;
console.log(newUser.password);
// newUser.save().then((u)=>{
//  console.log("saved..");
//  res.send("heloo");
//  }).catch((e)=>{
//   console.log(e);
//  })

  app.use(express.json());
  app.use(cors());

app.get("/" , (req , res)=>{
  res.send("helloo");
})

app.post("/insert" ,  (req , res) =>{

 //const user = req.body;

 // console.log(typeof user);
  const stdid = req.body.studentID;
  const password = req.body.password;
 
 
  // User.find({$where : {StudentID : stdid}} , (err , result )=>{
  //   if(err)
  //   console.log(err);
  //   else
  //     console.log(result);
  //     console.log("login successfully ");
  // });

  User.findOne({StudentID : stdid }).then((user)=>{
    if(user)
    {
      // console.log(user);
      if(user.password === password)
      {
        console.log("login successfull");
      }
      else
      console.log("you are not registered ....")
    }
    
  })

});



app.listen(PORT , ()=>{
    console.log("server started ....." + PORT);
})
