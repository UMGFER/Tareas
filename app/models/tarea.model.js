//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Tarea = sequelize.define("tareas", {
        id_tarea: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        responsable: {
            type: Sequelize.STRING
        },
        fechaInicio: {
            type: Sequelize.DATE
        },
        fechaFin: {
            type: Sequelize.DATE
        },
        fechaLimite: {
            type: Sequelize.DATE
        },
        estado: {
            type: Sequelize.STRING
        },
    });
    return Tarea;
};
