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
    name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    description: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    oc_oid: {
      type: DataTypes.CHAR(40),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "oc_oid",
      autoIncrement: false
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "enabled",
      autoIncrement: false
    },
    rule_expression_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rule_expression_id",
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
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_id",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "rule",
    comment: "",
    indexes: [{
      name: "i_rule_oc_oid",
      unique: false,
      fields: ["oc_oid"]
    }, {
      name: "i_rule_oc_oid",
      unique: false,
      fields: ["oc_oid"]
    }, {
      name: "i_rule_oc_oid",
      unique: false,
      fields: ["oc_oid"]
    }, {
      name: "i_rule_rule_expression_id",
      unique: false,
      fields: ["rule_expression_id"]
    }, {
      name: "i_rule_rule_expression_id",
      unique: false,
      fields: ["rule_expression_id"]
    }, {
      name: "i_rule_rule_expression_id",
      unique: false,
      fields: ["rule_expression_id"]
    }, {
      name: "i_rule_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_rule_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_rule_status_id",
      unique: false,
      fields: ["status_id"]
    }]
  };
  const RuleModel = sequelize.define("rule_model", attributes, options);
  return RuleModel;
};