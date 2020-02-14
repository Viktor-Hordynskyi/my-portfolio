const express = require("express");
const router = express.Router();

const { getAllSkills, getAllProjects } = require("../controllers/skills");
const { nodemailer } = require("../controllers/nodemailer");

// Basic "/index" routes
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../controllers/nodemailer', 'index.html'));
  res.status(200).send([{ skills: "/skills" }, { projects: "/projects" }]);
});

/* GET pages. */
router.get("/skills", getAllSkills);
router.get("/projects", getAllProjects);

// nodemailer - POST
router.post("/nodemailer", nodemailer);

module.exports = router;
