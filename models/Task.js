const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the task"],
    trim: true,
    maxlength: [20, "Task cannot be more than 20 character"],
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
