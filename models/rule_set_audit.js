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
    date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_updated",
      autoIncrement: false
    },
    updater_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "updater_id",
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
    tableName: "rule_set_audit",
    comment: "",
    indexes: [{
      name: "i_rule_set_audit_rule_set_id",
      unique: false,
      fields: ["rule_set_id"]
    }, {
      name: "i_rule_set_audit_rule_set_id",
      unique: false,
      fields: ["rule_set_id"]
    }, {
      name: "i_rule_set_audit_rule_set_id",
      unique: false,
      fields: ["rule_set_id"]
    }, {
      name: "i_rule_set_audit_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_rule_set_audit_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_rule_set_audit_status_id",
      unique: false,
      fields: ["status_id"]
    }]
  };
  const RuleSetAuditModel = sequelize.define("rule_set_audit_model", attributes, options);
  return RuleSetAuditModel;
};