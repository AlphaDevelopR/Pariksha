const mongoose =  require("mongoose");

const UserSchema = new mongoose.Schema ({
    // FName : {
    //     type : String ,
    //     required :true
    // },
    // LName : {
    //     type : String ,
    //     required :true
    // },
    // Gender : {
    //     type : String ,
    //     required :true
    // },
    // Email : {
    //     type : String ,
    //     required :true
    // },
    // phoneNumber : {
    //     type : String ,
    //     required :true
    // },
    StudentID : {
          type : String ,
          required : true
      },
      password : {
          type : String ,
          required : true
      } 

});

const User = mongoose.model("User" , UserSchema);

module.exports = User;

