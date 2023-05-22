const express = require("express");
const router = express.Router();
const Restaurant = require("../../models/restaurant");

// view all restaurants
router.get("/", (req, res) => {
  const userId = req.user._id;
  Restaurant.find({ userId }) // find data from Restaurant model
    .lean() // transform objects in Mongoose Model to JavaScript object
    .sort({ _id: "asc" })
    .then((restaurantsData) => res.render("index", { restaurantsData }))
    .catch((error) => console.error(error));
});

// search bar
router.get("/search", (req, res) => {
  const userId = req.user._id;
  if (!req.query.keywords) {
    res.redirect("/");
    return;
  }

  const keywords = req.query.keywords;
  const keyword = req.query.keywords.trim().toLowerCase();

  Restaurant.find({ userId })
    .lean()
    .then((restaurantsData) => {
      const filterRestaurantsData = restaurantsData.filter(
        (data) =>
          data.name.toLowerCase().includes(keyword) ||
          data.category.includes(keyword)
      );
      res.render("index", { restaurantsData: filterRestaurantsData, keywords });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
