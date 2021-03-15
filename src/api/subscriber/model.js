module.exports = (Sequelize, DataTypes) => {

    const Subscriber = Sequelize.define("Subscriber", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        customer_name: DataTypes.STRING(255),
        customer_phone: DataTypes.STRING(255),
        customer_cpf: DataTypes.STRING(255),
        customer_email: DataTypes.STRING(255),

        vehicle_description: DataTypes.STRING(255),
        vehicle_plate: DataTypes.STRING(255),
        vehicle_year: DataTypes.INTEGER,
        vehicle_warranty_date: DataTypes.DATE,

        plan_product: DataTypes.STRING(255),
        plan_begin_date: DataTypes.DATE,
        plan_end_date: DataTypes.DATE,
    }, {
            timestamps: true,
            tableName: 'subscriber',
            underscored: true,
        }
    );

    Subscriber.associate = function (models) {
    };

    return Subscriber;
};