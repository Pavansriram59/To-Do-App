const express = require("express");
const router = express.Router();
// const List = require("../database/models/list");
const Task = require("../database/models/task");

// * TASKS URLS
// ! Getting tasks from a list
router.get("/:listId/tasks", (req, res) => {
  Task.find({ _listId: req.params.listId })
    .then((tasks) => res.send(tasks))
    .catch((error) => console.log(error));
});

// ! Creating a task
router.post("/:listId/tasks", (req, res) => {
  new Task({ title: req.body.title, _listId: req.params.listId })
    .save()
    .then((task) => res.send(task))
    .catch((error) => console.log(error));
});

// ! Getting a specific task from a list
router.get("/:listId/tasks/:taskId", (req, res) => {
  Task.findOne({ _id: req.params.taskId, _listId: req.params.listId })
    .then((task) => res.send(task))
    .catch((error) => console.log(error));
});

// ! Updating a task
router.patch("/:listId/tasks/:taskId", (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskId, _listId: req.params.listId },
    { $set: req.body }
  )
    .then((task) => res.send(task))
    .catch((error) => console.log(error));
});

// ! Deleting a specific task from a list
router.delete("/:listId/tasks/:taskId", (req, res) => {
  Task.findOneAndDelete({ _id: req.params.taskId, _listId: req.params.listId })
    .then((task) => res.send(task))
    .catch((error) => console.log(error));
});

module.exports = router;
