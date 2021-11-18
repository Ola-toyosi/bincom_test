const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agentname', {
    name_id: {
      autoIncrement: true,
      type:  Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    phone: {
      type:  Sequelize.CHAR(13),
      allowNull: false
    },
    pollingunit_uniqueid: {
      type:  Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'agentname',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name_id" },
        ]
      },
    ]
  });
};
