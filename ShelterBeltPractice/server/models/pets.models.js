const mongoose = require("mongoose");


const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      minlength: [2, "Name must be at least 2 characters."],
    },
    breed: {
      type: String,
      required: [true, "Breed is required."],
      minlength: [2, "Breed must be at least 2 characters."],
    },
    age: {
      type: Number,
      required: [true, "Age is required."],
      
    },
    bio: {
      type: String,
      required: false,
     
    },
    imgUrl: {
      type: String,
      
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);


const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;