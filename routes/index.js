module.exports = function(app) {
  app.use("/main", require("./main"));
  app.use("/api", require("./api"));
};