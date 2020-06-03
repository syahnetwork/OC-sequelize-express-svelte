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
    oc_oid: {
      type: DataTypes.CHAR(512),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "oc_oid",
      autoIncrement: false
    },
    value: {
      type: DataTypes.CHAR(512),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "value",
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
    },
    property: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "property",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "rule_action_property",
    comment: "",
    indexes: []
  };
  const RuleActionPropertyModel = sequelize.define("rule_action_property_model", attributes, options);
  return RuleActionPropertyModel;
};