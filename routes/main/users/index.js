const MainUserRouter = require("express").Router();

MainUserRouter.route("/show")
  .get(require("./show-users-page.js"))

MainUserRouter.route("/new")
  .post(require("new.js"));

module.exports = MainUserRouter;