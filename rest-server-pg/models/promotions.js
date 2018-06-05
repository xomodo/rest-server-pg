  var mongoose = require('mongoose'); 
 var Schema = mongoose.Schema; 

 
 require('mongoose-currency').loadType(mongoose); 
 var Currency = mongoose.Types.Currency; 
 var uuid = require('uuid');
 
 var promotionSchema = new Schema({ 
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
     label: { 
         type: String, 
         required: true, 
         default: ""  
     },
     featured: {
        type: Boolean,
        default:false
    },	 
     price: { 
         type: Currency, 
         required: true 
     }, 
     description: { 
         type: String, 
         required: true 
     } 
 }, { 
     timestamps: true 
 }); 
 
 
 
 
 var promotions = mongoose.model('promotion', promotionSchema); 
 
 
 module.exports = promotions; 