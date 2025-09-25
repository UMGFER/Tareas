//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Pruebas = sequelize.define("pruebasRelation", {
        id_pruebas: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_prueba: {
            type: Sequelize.INTEGER,
            allowNull: false,
             references: {
            model: 'pruebas', 
             key: 'id_prueba'
        } 
        },
        lugar: {
            type: Sequelize.STRING
        },
        calle: {
            type: Sequelize.STRING
        },
        municipio: {
            type: Sequelize.STRING
        },
        fechaEntrega: {
            type: Sequelize.DATE
        },
        estado: {
            type: Sequelize.BOOLEAN
        },
    });
    return Pruebas;
};