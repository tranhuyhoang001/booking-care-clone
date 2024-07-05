const db = require('../models');

const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();
    console.log(data, 'data');
    return res.render('home-page.ejs', { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHomePage,
};
