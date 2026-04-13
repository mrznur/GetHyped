const Homepage = require('../models/Homepage');
const seedData = require('../data/homepage.json');

exports.getHomepage = async (req, res) => {
  try {
    let data = await Homepage.findOne();
    if (!data) {
      data = await Homepage.create(seedData);
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
