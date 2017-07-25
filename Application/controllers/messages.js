var mongoose = require("mongoose");
var Message = mongoose.model("Message");

function MessageController(){
  this.create = function(req, res) {
    console.log("Create method message controller", req.body);
    var message = new Message(req.body);
    message.save((err)=> {
      if(err) {
        res.status(401).json({erro: "oops"});
      } else {
        Message.findOne({_id: message._id})
          .populate("userId")
          .exec(function(err, message){
            res.json({message: message});
          })
      }
    })
  }
  this.index = function(req, res){
    console.log("Index Method message controller");
    Message.find({})
      .populate("userId")
      .exec((err, messages) => {
        if(err){
          res.status(401).json({error: "oopsy"})
        } else {
          res.json({messages: messages});
        }
      })
    //   function(err, messages){
    //     if(err){
    //       res.status(401).json({error: "woops"})
    //     } else {
    //       res.json({messages: messages});
    //   }
    // })
  }
}
module.exports = new MessageController();
