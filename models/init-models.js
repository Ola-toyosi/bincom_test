var DataTypes = require("sequelize").DataTypes;
var _agentname = require("./agentname");
var _announced_lga_results = require("./announced_lga_results");
var _announced_pu_results = require("./announced_pu_results");
var _announced_state_results = require("./announced_state_results");
var _announced_ward_results = require("./announced_ward_results");
var _lga = require("./lga");
var _party = require("./party");
var _polling_unit = require("./polling_unit");
var _states = require("./states");
var _ward = require("./ward");



function initModels(sequelize) {
  var agentname = _agentname(sequelize, DataTypes);
  var announced_lga_results = _announced_lga_results(sequelize, DataTypes);
  var announced_pu_results = _announced_pu_results(sequelize, DataTypes);
  var announced_state_results = _announced_state_results(sequelize, DataTypes);
  var announced_ward_results = _announced_ward_results(sequelize, DataTypes);
  var lga = _lga(sequelize, DataTypes);
  var party = _party(sequelize, DataTypes);
  var polling_unit = _polling_unit(sequelize, DataTypes);
  var states = _states(sequelize, DataTypes);
  var ward = _ward(sequelize, DataTypes);


  return {
    agentname,
    announced_lga_results,
    announced_pu_results,
    announced_state_results,
    announced_ward_results,
    lga,
    party,
    polling_unit,
    states,
    ward,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
