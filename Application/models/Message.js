var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MessageSchema = mongoose.Schema({
  message: String,
  userId: {type: Schema.Types.ObjectId, ref: 'User'}
})

mongoose.model("Message", MessageSchema);
