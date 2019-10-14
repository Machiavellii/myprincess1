const express = require('express');
const router = express.Router();
const config = require('config');
//const request = require('request');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Profile = require('../../models/profile');
const User = require('../../models/User');

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
    '/',
    auth,
    [
      check('gender', 'Gender is required')
        .not()
        .isEmpty(),
    check('sexual_orientation', 'Sexual orientation is required')
        .not()
        .isEmpty(),
    check('type', 'Account type is required')
        .not()
        .isEmpty(),
    check('country', 'Country is required')
        .not()
        .isEmpty(),
    check('canton', 'Canton is required')
        .not()
        .isEmpty(),
    check('city', 'City is required')
        .not()
        .isEmpty(),
    check('ZIP', 'ZIP is required')
        .not()
        .isEmpty(),
    check('subscription_plan', 'Subscription plan is required')
        .not()
        .isEmpty(),
    check('Languages', 'Spoken languages are required')
        .not()
        .isEmpty(),
    check('category', 'Category is required')
        .not()
        .isEmpty(),
    check('services', 'Services are required')
        .not()
        .isEmpty(),
    check('age', 'Age is required')
        .not()
        .isEmpty(),
    check('silhouette', 'Category is required')
        .not()
        .isEmpty(),
    check('origin', 'Origin is required')
        .not()
        .isEmpty(),
      
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {
        gender,
        sexual_orientation,
        phone,
        type,
        country,
        canton,
        city,
        ZIP,
        subscription_plan,
        start_of_subscription,
        end_of_subscription,
        favorites, // array
        is_active,
        languages, // array
        slogan,
        category,
        services, // array
        age,
        silhouette,
        origin,
        description,
        cover_photo,  // photo
        // photos,
        hours,
        rate,
        website,
        ratings,  // array
        // votes,
      } = req.body;
  
      /* Profile Object */
      const profileFields = {};
      profileFields.user = req.user.id;
      if (gender) profileFields.gender = gender;
      if (sexual_orientation) profileFields.sexual_orientation = sexual_orientation;
      if (phone) profileFields.phone = phone;
      if (type) profileFields.type = type;
      if (country) profileFields.country = country;
      if (canton) profileFields.canton = canton;
      if (city) profileFields.city = city;
      if (ZIP) profileFields.ZIP = ZIP;
      if (subscription_plan) profileFields.subscription_plan = subscription_plan;
      if (start_of_subscription) profileFields.start_of_subscription = start_of_subscription;
      if (end_of_subscription) profileFields.end_of_subscription = end_of_subscription;
      if (is_active) profileFields.is_active = is_active;
      if (slogan) profileFields.slogan = slogan;
      if (category) profileFields.category = category;
      if (age) profileFields.age = age;
      if (silhouette) profileFields.silhouette = silhouette;
      if (origin) profileFields.origin = origin;
      if (description) profileFields.description = description;
      if (hours) profileFields.hours = hours;
      if (rate) profileFields.rate = rate;
      if (website) profileFields.website = website;

        //photo
      if (cover_photo) profileFields.cover_photo = cover_photo;

        // Array items
      if (favorites) {
        profileFields.favorites = favorites.split(',').map(favorite => favorite.trim());
      }
      if (languages) {
        profileFields.languages = languages.split(',').map(language => language.trim());
      }
      if (services) {
        profileFields.services = services.split(',').map(service => service.trim());
      }
      if (ratings) {
        profileFields.ratings = ratings.split(',').map(rating => rating.trim());
      }
  
  
      try {
        let profile = await Profile.findOne({ user: req.user.id });
  
        if (profile) {
          //Update
          profile = await Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true }
          );
  
          return res.json(profile);
        }
  
        //Create
        profile = new Profile(profileFields);
  
        await profile.save();
  
        res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
    try {
      const profiles = await Profile.find().populate('user', ['nickname']);
      res.json(profiles);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });





  module.exports = router;