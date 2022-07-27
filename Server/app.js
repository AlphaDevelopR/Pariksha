const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;
const mongoose =  require("mongoose");
const User = require("./models/User");
const cors = require("cors");
const bcrypt = require('bcryptjs');
const saltRounds = 10;
mongoose.connect("mongodb+srv://Ankit9442:Ankitrawat9442@cluster0.tqs5b.mongodb.net/?retryWrites=true&w=majority" , {
    useNewUrlParser : true
}).then(console.log("mongoose connected ....")).catch((err)=>console.log(err));



const newUser = new User( {
  StudentID : "ankitrawat20052001@gmail.com",
  password : "Ankitrawat9442" 
});
bcrypt.genSalt(saltRounds, function (err, salt) {
  // generating salt for the user password
  bcrypt.hash(newUser.password, salt, function (err, hash) {
      // returns hash
       newUser.password = hash;
      
      //  newUser.save().then((u)=>{
      //   console.log("saved..");
        
      //   }).catch((e)=>{
      //    console.log(e);
      //   })
  })});



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
    { console.log(user);
       // Match password
       bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          console.log("login successfully ");
   
        } else {
         console.log("password not matched ");
        }
      });
    }
      else
      console.log("you are not registered ....")
    
    
  })
  


});



app.listen(PORT , ()=>{
    console.log("server started ....." + PORT);
})
