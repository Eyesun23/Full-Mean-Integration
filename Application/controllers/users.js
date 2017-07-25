var mongoose = require("mongoose");
var User = mongoose.model("User");
mongoose.Promise = global.Promise;


function UsersController() {
  this.register = function(req, res) {
    console.log(req.body, "This is Controller");
    User.findOne({username: req.body.username}, function (err, user){
      if (err) {
        res.status(500).json({message: "OOPS"});
      } else {
        if (user){
          if(user.password == req.body.password){
            res.json({user: user, message: "Authenticated"})
          } else {
            res.status(401).json({message: "Password doesn't match!"})
          }
        } else {
            var user = new User(req.body)
            user.save(function(err){
              if(err){
                console.log("error saving user", err);
                res.status(500).json({message: "whoops"})
            } else {
                res.json({user: user, message: "created"})
            }
          })
        }
      }
    })
  }
}
this.show = function(req, res){
  User.findOne({_id: req.params.id}, function (err, user){
    if(err) {
      res.status(500).json({message: "oops"})
    } else {
     res.json({user: user});
    }
  })
}
module.exports = new UsersController();
