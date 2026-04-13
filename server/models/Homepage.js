const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  number: String,
  title: String,
  tagline: String,
  description: String,
  link: String,
});

const statSchema = new mongoose.Schema({
  value: String,
  label: String,
  sub: String,
});

const caseSchema = new mongoose.Schema({
  slug: String,
  title: String,
  link: String,
});

const brandSchema = new mongoose.Schema({
  name: String,
});

const homepageSchema = new mongoose.Schema({
  hero: {
    title: String,
    subtitle: String,
    stats: [statSchema],
  },
  intro: {
    bigText: String,
    bodyText: String,
  },
  services: [serviceSchema],
  cases: [caseSchema],
  brands: [brandSchema],
  cta: {
    title: String,
    email: String,
  },
});

module.exports = mongoose.model('Homepage', homepageSchema);
