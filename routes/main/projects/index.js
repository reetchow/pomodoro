const ProjectsRouter = require("express").Router();

ProjectsRouter.route("/")
  .get(require("show-projects-page.js"));

module.exports = ProjectsRouter;