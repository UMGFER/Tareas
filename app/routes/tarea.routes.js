module.exports = app => {
    const tarea = require("../controllers/tarea.controller.js");
    var router = require("express").Router();
    // Create a new music
    router.post("/create/", tarea.create);
    // Retrieve all music
    router.get("/", tarea.findAll);
    // Retrieve all published music
    router.get("/status", tarea.findAllStatus);
    // Retrieve a single music with id
    router.get("/:id", tarea.findOne);
    // Update a music with id
    router.put("/update/:id", tarea.update);
    // Delete a music with id
    router.delete("/delete/:id", tarea.delete);
    // Delete all music
    router.delete("/delete/", tarea.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/spotify/
    app.use("/api/tarea", router);
};