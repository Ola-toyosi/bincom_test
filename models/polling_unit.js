const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const pollingUnit = sequelize.define('polling_unit', {
    uniqueid: {
      autoIncrement: true,
      type:  Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    polling_unit_id: {
      type:  Sequelize.INTEGER,
      allowNull: false
    },
    ward_id: {
      type:  Sequelize.INTEGER,
      allowNull: false
    },
    lga_id: {
      type:  Sequelize.INTEGER,
      allowNull: false
    },
    uniquewardid: {
      type:  Sequelize.INTEGER,
      allowNull: true
    },
    polling_unit_number: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    polling_unit_name: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    polling_unit_description: {
      type:  Sequelize.TEXT,
      allowNull: true
    },
    lat: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    long: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    entered_by_user: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    date_entered: {
      type:  Sequelize.DATE,
      allowNull: true
    },
    user_ip_address: {
      type: Sequelize.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'polling_unit',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uniqueid" },
        ]
      },
    ]
  });

module.exports = pollingUnit