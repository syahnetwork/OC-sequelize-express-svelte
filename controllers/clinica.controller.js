const db = require("../models")
const subject = db.clinica
const op = db.Sequelize.Op

exports.create = (req, res) => {
  if (!req.body.label) {
    res.status(400).send({
      message: "content can't empty"
    })
    return
  }

  const study_subject = {
    label: req.body.label,
    oc_oid: req.body.oc_oid
  }

  subject.create(study_subject)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "error occurred"
      })
    })
}

exports.findAll = (req, res) => {
  const label = req.query.label
  let condition = label ? { label: { [op.like]: `%{label}` } } : null

  subject.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "error occured"
      })
    })
}
