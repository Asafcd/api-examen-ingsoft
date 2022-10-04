const mongo = require("mongoose");

const personSchema = mongo.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  job: String,
  city: String,
  country: String,
  email: String,
  phoneNumber: String,

  skills: [{ name: String, percentage: Number }],
  languages: [{ name: String, percentage: Number }],
  workexperience: [
    {
      title: String,
      company: String,
      from: String,
      to: String,
      current: Boolean,
      description: String,
    },
  ],
  education: [
    {
      name: String,
      career: String,
      from: String,
      to: String,
      forever: Boolean,
      degree: String,
    },
  ],
  socialMedia: {
    facebook: String,
    instagram: String,
    snapchat: String,
    pinterest: String,
    twitter: String,
    linkedin: String,
  },
  challenges: [
    {
      name: String,
      date: String,
      description: String,
      url: String,
    },
  ],
  config: { color: String, fontFamily: String, genericFamily: String },
});

/* const personSchema = mongo.Schema({
    nombre: String,
    age: Number,
    current: Boolean
}) */

personSchema.methods.speak = function speak() {
    const greeting = this.nombre
      ? "Meow name is " + this.nombre
      : "I don't have a name";
    console.log(greeting);
  };

module.exports = mongo.model('Persona', personSchema)