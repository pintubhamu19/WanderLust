const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const ListingController = require("../controllers/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(ListingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(ListingController.createListing)
  );

// New Route
router.get("/new", isLoggedIn, ListingController.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(ListingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(ListingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(ListingController.destroyListing));

// index route
// router.get("/", wrapAsync(ListingController.index));

// show route
// router.get("/:id", wrapAsync(ListingController.showListing));

// create route
// router.post(
//   "/",
//   validateListing,
//   isLoggedIn,
//   wrapAsync(ListingController.createListing)
// );

// edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(ListingController.renderEditForm)
);

// update route
// router.put(
//   "/:id",
//   validateListing,
//   isLoggedIn,
//   isOwner,
//   wrapAsync(ListingController.updateListing)
// );

// delete route
// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(ListingController.destroyListing)
// );

module.exports = router;
