const dbConfig = require("../config/db.config")

const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.clinica = require("./study_subject")(sequelize, Sequelize)
db.clinica = require("./subject")(sequelize, Sequelize)
db.clinica = require("./study")(sequelize, Sequelize)
db.clinica = require("./status")(sequelize, Sequelize)
db.clinica = require("./user_account")(sequelize, Sequelize)

module.exports = db