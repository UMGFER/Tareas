//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Prueba = sequelize.define("pruebas", {
        id_prueba: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        departamento: {
            type: Sequelize.STRING
        },
        salario: {
            type: Sequelize.INTEGER
        },
        dpi: {
            type: Sequelize.STRING
        },
        genero: {
            type: Sequelize.STRING
        },
        fecha: {
            type: Sequelize.DATE
        },
        estado: {
            type: Sequelize.BOOLEAN
        },
    });
    return Prueba;
};
