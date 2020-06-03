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
    rule_set_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rule_set_id",
      autoIncrement: false
    },
    rule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rule_id",
      autoIncrement: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "owner_id",
      autoIncrement: false
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_created",
      autoIncrement: false
    },
    date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_updated",
      autoIncrement: false
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "update_id",
      autoIncrement: false
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "status_id",
      autoIncrement: false
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "version",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "rule_set_rule",
    comment: "",
    indexes: [{
      name: "i_rule_set_rule_rule_id",
      unique: false,
      fields: ["rule_id"]
    }, {
      name: "i_rule_set_rule_rule_id",
      unique: false,
      fields: ["rule_id"]
    }, {
      name: "i_rule_set_rule_rule_id",
      unique: false,
      fields: ["rule_id"]
    }, {
      name: "i_rule_set_rule_rule_set_id",
      unique: false,
      fields: ["rule_set_id"]
    }, {
      name: "i_rule_set_rule_rule_set_id",
      unique: false,
      fields: ["rule_set_id"]
    }, {
      name: "i_rule_set_rule_rule_set_id",
      unique: false,
      fields: ["rule_set_id"]
    }, {
      name: "i_rule_set_rule_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_rule_set_rule_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_rule_set_rule_status_id",
      unique: false,
      fields: ["status_id"]
    }]
  };
  const RuleSetRuleModel = sequelize.define("rule_set_rule_model", attributes, options);
  return RuleSetRuleModel;
};