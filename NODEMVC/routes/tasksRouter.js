const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/TaskContoller");

router.get("/add", TaskController.createTask);
router.post("/add", TaskController.createTaskSave);
router.post("/remove", TaskController.removeTask);
router.get("/edit/:id",TaskController.updateTask)
router.post("/edit",TaskController.updateTaskPost)
router.post("/updatestatus",TaskController.toogleTaskStatus)
router.get("/", TaskController.showTasks);

module.exports = router;
