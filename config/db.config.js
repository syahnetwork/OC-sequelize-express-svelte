module.exports = {
  HOST: "localhost",
  USER: "clinica",
  PASSWORD: "clinica",
  DB: "openclinica",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}