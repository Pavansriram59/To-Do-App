const express = require("express");
const router = express.Router();
const List = require("../database/models/list");
const Task = require("../database/models/task");

// * LISTS URLS
// ! Getting lists
router.get("/lists", (req, res) => {
  List.find({})
    .then((lists) => res.send(lists))
    .catch((error) => console.log(error));
});

// ! Creating a list
router.post("/lists", (req, res) => {
  new List({ title: req.body.title })
    .save()
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

// ! Getting a specific list
router.get("/lists/:listId", (req, res) => {
  List.find({ _id: req.params.listId })
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

// ! Updating a list
router.patch("/lists/:listId", (req, res) => {
  List.findOneAndUpdate(
    { _id: req.params.listId },
    { $set: { title: req.body.title } }
  )
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

// ! Deleting a list
router.delete("/lists/:listId", (req, res) => {
  const deleteTasks = (list) => {
    Task.deleteMany({ _listId: list._id })
      .then(() => list)
      .catch((error) => console.log(error));
  };

  const list = List.findByIdAndDelete(req.params.listId)
    .then((list) => deleteTasks(list))
    .catch((error) => console.log(error));

  res.status(200).send(list);
});

module.exports = router;
