const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    rule_action_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rule_action_id",
      autoIncrement: false
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "version",
      autoIncrement: false
    },
    rule_expression_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rule_expression_id",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "rule_action_stratification_factor",
    comment: "",
    indexes: []
  };
  const RuleActionStratificationFactorModel = sequelize.define("rule_action_stratification_factor_model", attributes, options);
  return RuleActionStratificationFactorModel;
};