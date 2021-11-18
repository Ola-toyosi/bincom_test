const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('party', {
    id: {
      autoIncrement: true,
      type:  Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partyid: {
      type: Sequelize.STRING(11),
      allowNull: false
    },
    partyname: {
      type: Sequelize.STRING(11),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'party',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
