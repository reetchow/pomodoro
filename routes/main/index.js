const MainRouter = require('express').Router();

// Put route handlers here
MainRouter.use("/users", require("./users"));
MainRouter.use("/projects", require("./projects"));

module.exports = MainRouter;