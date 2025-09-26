// importamos db los modelos en este caso si tenemos uno o mas, se puede referenciar db."nombreModelo".   
const db = require("../models");
const Tarea = db.tarea;
const Op = db.Sequelize.Op;

// Create and Save a new student
exports.create = (req, res) => {
    // Validamos que dentro del  request no venga vacio el nombre, de lo contrario returna error
    if (!req.body.titulo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a MUSIC, definiendo una variable con la estructura del reques para luego solo ser enviada como parametro mas adelante. 
    const tarea = {
        id_tarea: req.body.id_tarea,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        responsable: req.body.responsable,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        fechaLimite: req.body.fechaLimite,
        // utilizando ? nos ayuda a indicar que el paramatro puede ser opcional dado que si no viene, le podemos asignar un valor default
        estado: req.body.estado,
    };

    // Save a new MUSIC into the database
    Tarea.create(tarea)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Music."
            });
        });
};

// Retrieve all music from the database.
exports.findAll = (req, res) => {
    const titulo = req.query.nombre;
    var condition = titulo ? { titulo: { [Op.iLike]: `%${titulo}%` } } : null;

    Tarea.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving music."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tarea.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving music with id=" + id
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tarea.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "music was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update music with id=${id}. Maybe music was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating music with id=" + id
            });
        });
};

// Delete a music with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    // utilizamos el metodo destroy para eliminar el objeto mandamos la condicionante where id = parametro que recibimos 
    Tarea.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "music was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete music with id=${id}. la musica no fue encontrada!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

// Delete all music from the database.
exports.deleteAll = (req, res) => {
    Tarea.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} music were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all music."
            });
        });
};

// find all active music, basado en el atributo status vamos a buscar que solo los clientes activos
exports.findAllStatus = (req, res) => {
    Tarea.findAll({ where: { estados: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving music."
            });
        }); 
};