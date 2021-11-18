const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ward', {
    uniqueid: {
      autoIncrement: true,
      type:  Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ward_id: {
      type:  Sequelize.INTEGER,
      allowNull: false
    },
    ward_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    lga_id: {
      type:  Sequelize.INTEGER,
      allowNull: false
    },
    ward_description: {
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
    tableName: 'ward',
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
};
