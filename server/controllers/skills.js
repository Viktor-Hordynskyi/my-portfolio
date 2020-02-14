const connection = require('../config/config');

exports.getAllSkills = (req, res) => {
  connection.query('SELECT * FROM skills', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
};

exports.getAllProjects = (req, res) => {
  connection.query('SELECT * FROM projects', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
};