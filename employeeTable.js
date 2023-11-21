const { DataTypes } = require('sequelize');
const { seq } = require('./database');

const Employee = seq.define("employee", {
    empid: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    empfname: {
        type: DataTypes.STRING,
    },
    emplname: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    Gender: {
        type: DataTypes.STRING,
        values: ['M', 'F'], // Enum values
    },
    mob_num: {
        type: DataTypes.STRING,
    },
    Deseg: {
        type: DataTypes.STRING,
    },
    doj: {
        type: DataTypes.DATE,
    },
    bid: {
        type: DataTypes.STRING,
    },
    salary: {
        type: DataTypes.STRING,
    },
}, {timestamps: false});

module.exports = { Employee };
