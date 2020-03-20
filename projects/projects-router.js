const express = require("express");

const projects = require("./projectsModel");

const router = express.Router();

router.get("/", (req, res) => {
  projects
    .findProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({
        error: "Failed to get projects."
      });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  projects
    .createProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({
        error: "Failed to create new project"
      });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  projects
    .editProject(changes, id)
    .then(update => {
      res.status(200).json(update);
    })
    .catch(err => {
      res.status(500).json({
        error: "Could not update project."
      });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  projects
    .deleteProject(id)
    .then(project => {
      if (project) {
        res.status(200).json({ removed: project });
      } else {
        res.status(404).json({
          error: "Could not find project with that id."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "Could not delete project."
      });
    });
});

router.get("/resources", (req, res) => {
  projects
    .findResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({
        error: "Failed to get resources."
      });
    });
});

router.post("/resources", (req, res) => {
  const resourceData = req.body;

  projects
    .createResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({
        error: "Failed to create new resource"
      });
      console.log(err);
    });
});

router.get("/tasks", (req, res) => {
  projects
    .findTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({
        error: "Failed to get tasks."
      });
    });
});

router.post("/tasks", (req, res) => {
  const taskData = req.body;

  projects
    .createTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({
        error: "Failed to create new task"
      });
      console.log(err);
    });
});

router.get("/:id/details", (req, res) => {
  projects
    .projectDetails(req.params.id)
    .then(details => {
      res.status(200).json(details);
    })
    .catch(err => {
      res.status(500).json({
        error: "Failed to get project details."
      });
      console.log(err);
    });
});

module.exports = router;
