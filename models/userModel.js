const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  professionalName: { type: String, required: true },
  nameLink: {
    base64Image: String,
    firstName: String,
    // Puedes agregar más campos si tu imagen necesita metadata
  },
  primaryDescription: String,
  workDescription1: String,
  workDescription2: String,
  linkTitleText: String,
  linkedInLink: {
    // Puede ser un objeto con propiedades como url, description, etc.
    type: Object,
  },
  githubLink: {
    type: Object,
  },
  contactText: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

/*Collection example:

{
  "professionalName": "Nathan Birch",
  "nameLink": {
    "base64Image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO...",
    "firstName": "Nathan"
  },
  "primaryDescription": "is a professor at BYU-Idaho",
  "workDescription1": "He is a full-stack web developer and mobile application developer.",
  "workDescription2": "He teaches lots of programming and web development classes.",
  "linkTitleText": "Check out his work below",
  "linkedInLink": {
    "url": "https://linkedin.com/in/nathanbirch"
  },
  "githubLink": {
    "url": "https://github.com/nathanbirch"
  },
  "contactText": "Feel free to contact him at birchn@byui.edu if you'd like for him to work on a project."
}
*/