const { validationResult } = require('express-validator');

const Subscribe = require('../models/subcriberSchema');
const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const postSub = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(new HttpError('could not add the item',422));
      }
      const {name,email,option,time}=req.body;
      console.log(name,email,option,time);
      const createdSubscribe = new Subscribe({
          name:name,
          
          email:email,
          
          option:option,
          
          time:time
      });
      await createdSubscribe.save();
      res.status(201).json({Subscribeitem:createdSubscribe.toObject({getters:true})});
}

exports.postSub = postSub;