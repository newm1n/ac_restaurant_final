const express = require("express");
const router = express.Router();
const Restaurant = require("../../models/restaurant");

// create new restaurant data
router.get("/new", (req, res) => {
  res.render("new");
});

// add new restaurant
router.post("/", (req, res) => {
  const userId = req.user._id;
  const restaurantData = {
    name: req.body.name,
    name_en: req.body.name_en,
    category: req.body.category,
    image: req.body.image,
    location: req.body.location,
    phone: req.body.phone,
    google_map: req.body.google_map,
    rating: req.body.rating,
    description: req.body.description,
    userId: userId,
  };
  Restaurant.create({ ...restaurantData })
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

// edit restaurant data
router.get("/:id/edit", (req, res) => {
  const _id = req.params.id;
  const userId = req.user._id;
  Restaurant.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render("edit", { restaurant }))
    .catch((error) => console.log(error));
});

// update restaurant data
router.put("/:id", (req, res) => {
  const _id = req.params.id;
  const userId = req.user._id;
  // 需設定useFindAndModify: false 才能使用findOneAndUpdate
  Restaurant.findOneAndUpdate({ _id, userId }, req.body)
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch((err) => console.log(err));
});

// show one restaurant content
router.get("/:id", (req, res) => {
  const _id = req.params.id;
  const userId = req.user._id;
  Restaurant.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render("show", { restaurant }))
    .catch((error) => console.error(error));
});

// delete restaurant data
router.delete("/:id", (req, res) => {
  const _id = req.params.id;
  const userId = req.user._id;
  // 需設定useFindAndModify: false 才能使用findOneAndDelete
  Restaurant.findOneAndDelete({ _id, userId })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

module.exports = router;
