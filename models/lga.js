const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const lga = sequelize.define('lga', {
    uniqueid: {
      autoIncrement: true,
      type:  Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lga_id: {
      type:  Sequelize.INTEGER,
      allowNull: false
    },
    lga_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    state_id: {
      type:  Sequelize.INTEGER,
      allowNull: false
    },
    lga_description: {
      type:  Sequelize.TEXT,
      allowNull: true
    },
    entered_by_user: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    date_entered: {
      type:  Sequelize.DATE,
      allowNull: false
    },
    user_ip_address: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lga',
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

  module.exports = lga