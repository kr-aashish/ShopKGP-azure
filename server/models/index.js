'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = {
    username: 'shopkgp',
    password: '(@JEETMPHED01)',
    database: 'shopkgp',
    host: 'shopkgp.mysql.database.azure.com',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            // ca: fs.readFileSync(path.join(__dirname, 'BaltimoreCyberTrustRoot.crt.pem')),
            rejectUnauthorized: false
        },
        // encrypt: true
    },
    logging: false,
    pool: {
        max: 1000,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;