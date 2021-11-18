const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('announced_lga_results', {
    result_id: {
      autoIncrement: true,
      type:  Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lga_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    party_abbreviation: {
      type:  Sequelize.CHAR(4),
      allowNull: false
    },
    party_score: {
      type:  Sequelize.INTEGER,
      allowNull: false
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
    tableName: 'announced_lga_results',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "result_id" },
        ]
      },
    ]
  });
};
