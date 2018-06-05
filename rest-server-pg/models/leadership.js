  var mongoose = require('mongoose'); 
 var Schema = mongoose.Schema; 
 var uuid = require('uuid');
 
 var leadershipSchema = new Schema({ 
     _id: { 
      type: String, 
      index: { unique: true }, 
      default: uuid.v4 
     },	 
	 name: { 
         type: String, 
         required: true, 
         unique: true 
     }, 
     image: { 
         type: String, 
         required: true 
     }, 
     designation: { 
         type: String, 
         required: true 
     }, 
     abbr: { 
         type: String, 
         required: true 
     }, 
     description: { 
         type: String, 
         required: true 
     } 
 }, { 
     timestamps: true 
 }); 
 
 
 
 
 var leaderships = mongoose.model('leadership', leadershipSchema); 
 
 module.exports = leaderships; 
