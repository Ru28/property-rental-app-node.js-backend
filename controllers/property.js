const Property = require('../models/property');
const User = require('../models/userModel');

// Add a new property
const addPropertyDetails = async (req, res) => {
  const { userId, title, description, rentPrice, location, bedrooms, amenities, image } = req.body;

  try {
    // Find the user submitting the property
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    // Create a new property
    const newProperty = new Property({
      user: user._id,
      title,
      description,
      rentPrice,
      location,
      bedrooms,
      amenities,
      image,
    });

    // Save the property to the database
    const savedProperty = await newProperty.save();

    res.status(201).json({
      message: 'Property added successfully',
      property: savedProperty,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { addPropertyDetails };