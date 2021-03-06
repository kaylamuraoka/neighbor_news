const path = require("path");

module.exports = (app) => {
  app.get("/exercise", (req, res) => {
    console.log(req);
    res.sendFile(path.join(""));
  });

  app.get("/index", (req, res) => {
    res.sendFile(path.join(""));
  });

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(""));
  });
};
