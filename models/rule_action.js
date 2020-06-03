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
    rule_set_rule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rule_set_rule_id",
      autoIncrement: false
    },
    action_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "action_type",
      autoIncrement: false
    },
    expression_evaluates_to: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "expression_evaluates_to",
      autoIncrement: false
    },
    message: {
      type: DataTypes.CHAR(2040),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "message",
      autoIncrement: false
    },
    email_to: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email_to",
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
    },
    rule_action_run_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rule_action_run_id",
      autoIncrement: false
    },
    oc_oid_reference: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "oc_oid_reference",
      autoIncrement: false
    },
    email_subject: {
      type: DataTypes.CHAR(1020),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email_subject",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "rule_action",
    comment: "",
    indexes: [{
      name: "i_rule_action_action_type",
      unique: false,
      fields: ["action_type"]
    }, {
      name: "i_rule_action_action_type",
      unique: false,
      fields: ["action_type"]
    }, {
      name: "i_rule_action_action_type",
      unique: false,
      fields: ["action_type"]
    }, {
      name: "i_rule_action_rule_set_rule_id",
      unique: false,
      fields: ["rule_set_rule_id"]
    }, {
      name: "i_rule_action_rule_set_rule_id",
      unique: false,
      fields: ["rule_set_rule_id"]
    }, {
      name: "i_rule_action_rule_set_rule_id",
      unique: false,
      fields: ["rule_set_rule_id"]
    }, {
      name: "i_rule_action_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_rule_action_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_rule_action_status_id",
      unique: false,
      fields: ["status_id"]
    }]
  };
  const RuleActionModel = sequelize.define("rule_action_model", attributes, options);
  return RuleActionModel;
};