module.exports = {
  HOST: "ep-silent-boat-a8ivqjpr-pooler.eastus2.azure.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_IPi1zeZ5uYWl",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};