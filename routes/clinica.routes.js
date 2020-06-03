module.exports = app => {
  const clinica = require("../controllers/clinica.controller")

  let router = require("express").Router()

  router.post("/", clinica.create)
  router.get("/", clinica.findAll)

  app.use("/api", router)
}