const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: true,
      trim: true,
    },
  },
  { collection: "lists" }
);

const List = mongoose.model("List", ListSchema);
module.exports = List;
