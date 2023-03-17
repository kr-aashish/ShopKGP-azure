module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("product", {
        itemId: {
            type: DataTypes.UUID, 
            defaultValue: sequelize.UUIDV4, 
            primaryKey: true,
        }, 
        sellerId: {
            type: DataTypes.UUID, 
            defaultValue: sequelize.UUIDV4, 
            allowNull: false,
        }, 
        name: {
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        description: {
            type: DataTypes.TEXT, 
            allowNull: false,
        }, 
        price: {
            type: DataTypes.DECIMAL(10, 2), 
            allowNull: false,
        }, 
        imageUrl: {
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        category: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
    });

    return product;
}