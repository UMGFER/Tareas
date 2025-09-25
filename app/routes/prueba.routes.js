module.exports = app => {
    const prueba = require("../controllers/prueba.controller.js");
    var router = require("express").Router();
    // Create a new music
    router.post("/create/", prueba.create);
    // Retrieve all music
    router.get("/", prueba.findAll);
    // Retrieve all published music
    router.get("/status", prueba.findAllStatus);
    // Retrieve a single music with id
    router.get("/:id", prueba.findOne);
    // Update a music with id
    router.put("/update/:id", prueba.update);
    // Delete a music with id
    router.delete("/delete/:id", prueba.delete);
    // Delete all music
    router.delete("/delete/", prueba.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/spotify/
    app.use("/api/prueba", router);
};