module.exports = app => {
    const pruebas = require("../controllers/pruebas.controller.js");
    var router = require("express").Router();
    // Create a new music
    router.post("/create/", pruebas.create);
    // Retrieve all music
    router.get("/", pruebas.findAll);
    // Retrieve all published music
    router.get("/status", pruebas.findAllStatus);
    // Retrieve a single music with id
    router.get("/:id", pruebas.findOne);
    // Update a music with id
    router.put("/update/:id", pruebas.update);
    // Delete a music with id
    router.delete("/delete/:id", pruebas.delete);
    // Delete all music
    router.delete("/delete/", pruebas.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/spotify/
    app.use("/api/pruebas", router);
};