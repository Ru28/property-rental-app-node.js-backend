const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  rentPrice: { type: Number, required: true },
  location: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  amenities: {
    pool: { type: Boolean, default: false },
    gym: { type: Boolean, default: false },
    fullyFurnished: { type: Boolean, default: false },
    semiFurnished: { type: Boolean, default: false },
    lift: { type: Boolean, default: false },
    unfurnished: { type: Boolean, default: false },
  },
  image: { type: String },
});

module.exports = mongoose.model('Property', propertySchema);
