const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGODB_URI}`, () =>
  console.log(`Mongo DB connected.`)
);
