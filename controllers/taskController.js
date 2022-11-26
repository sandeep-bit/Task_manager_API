const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
exports.createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    success: true,
    task,
  });
});

exports.getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find();
  if (!tasks) {
    return next(new createCustomError("No Tasks Found", 404));
  }
  res.status(200).json({
    success: true,
    tasks,
  });
});

exports.getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({
    success: true,
    task,
  });
});

exports.updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  // task.completed = req.body.completed;
  //await task.save();
  res.status(200).json({
    success: true,
    task,
  });
});

// exports.editTask = async (req, res, next) => {
//   const { id: taskId } = req.params;
//   const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
//     new: true,
//     runValidators: true,
//     overwrite: true,
//   });
//   if (!task) {
//     return res.status(404).json({
//       message: "No task Found with above mentioned ID",
//     });
//   }
//   res.status(200).json({
//     success: true,
//     task,
//   });
// };
exports.deleteTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  await task.remove();
  res.status(200).json({
    success: true,
  });
});
