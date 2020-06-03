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
    rule_expression_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rule_expression_id",
      autoIncrement: false
    },
    study_event_definition_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_event_definition_id",
      autoIncrement: false
    },
    crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "crf_id",
      autoIncrement: false
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "crf_version_id",
      autoIncrement: false
    },
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_id",
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
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_id",
      autoIncrement: false
    },
    item_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_group_id",
      autoIncrement: false
    },
    run_schedule: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "run_schedule",
      autoIncrement: false
    },
    run_time: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "run_time",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "rule_set",
    comment: "",
    indexes: [{
      name: "i_rule_set_crf_id",
      unique: false,
      fields: ["crf_id"]
    }, {
      name: "i_rule_set_crf_id",
      unique: false,
      fields: ["crf_id"]
    }, {
      name: "i_rule_set_crf_id",
      unique: false,
      fields: ["crf_id"]
    }, {
      name: "i_rule_set_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_rule_set_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_rule_set_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_rule_set_rule_expression_id",
      unique: false,
      fields: ["rule_expression_id"]
    }, {
      name: "i_rule_set_rule_expression_id",
      unique: false,
      fields: ["rule_expression_id"]
    }, {
      name: "i_rule_set_rule_expression_id",
      unique: false,
      fields: ["rule_expression_id"]
    }, {
      name: "i_rule_set_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_rule_set_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_rule_set_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_rule_set_study_event_definition_id",
      unique: false,
      fields: ["study_event_definition_id"]
    }, {
      name: "i_rule_set_study_event_definition_id",
      unique: false,
      fields: ["study_event_definition_id"]
    }, {
      name: "i_rule_set_study_event_definition_id",
      unique: false,
      fields: ["study_event_definition_id"]
    }, {
      name: "i_rule_set_study_id",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "i_rule_set_study_id",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "i_rule_set_study_id",
      unique: false,
      fields: ["study_id"]
    }]
  };
  const RuleSetModel = sequelize.define("rule_set_model", attributes, options);
  return RuleSetModel;
};