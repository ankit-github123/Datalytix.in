const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const SubscriberSchema = new Schema({
    name:{type:String,required:true},
    
    email:{type:String,required:true},
    
    option:{type:String,required:true},
    
    time:{type:String,required:true}
    
});

SubscriberSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Subscriber',SubscriberSchema);
