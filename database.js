const Seuelize = require('sequelize');

const seq = new Seuelize('bank', 'root', 'Ram@1994',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {seq};