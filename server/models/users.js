const { isEmail, isMobilePhone } = require('validator');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    userId: {
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    contactNumber: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: true,
        isMobilePhone: true,
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return users;
};
