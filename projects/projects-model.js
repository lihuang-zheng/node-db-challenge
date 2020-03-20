const db = require("../data/db.config");

function findProjects() {
  return db("projects");
}

function createProject(project) {
  return db("projects").insert(project);
}

function editProject(project, id) {
  return db("projects")
    .where({ id })
    .update(project);
}

function deleteProject(id) {
  return db("projects")
    .where({ id })
    .delete();
}

function findResources() {
  return db("resources");
}

function createResource(resource) {
  return db("resources").insert(resource);
}

function findTasks() {
  return db("projects")
    .join("projectTasks", "projectTasks.projectId", "projects.id")
    .select(
      "projects.name",
      "projects.description as projectDescription",
      "projectTasks.description",
      "projectTasks.notes"
    );
}

function createTask(task) {
  return db("projectTasks").insert(task);
}

function projectDetails(project_id) {
  return db("projects")
    .join("projectTasks", "projectTasks.projectId", "projects.id")
    .select(
      "projects.id",
      "projects.name",
      "projects.description",
      "projects.completed",
      "projectTasks.description",
      "projectTasks.notes"
    )
    .where({ projectId: project_id });
}

module.exports = {
  findProjects,
  createProject,
  editProject,
  deleteProject,
  findResources,
  createResource,
  findTasks,
  createTask,
  projectDetails
};
