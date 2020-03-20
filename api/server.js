const express = require("express");

const projectsRouter = require("../projects/projects-router");

const server = express();
server.use(express.json());

server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Pinbon server is running :)" });
});

module.exports = server;
