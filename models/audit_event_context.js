const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    audit_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "audit_id",
      autoIncrement: false,
      references: {
        key: "audit_id",
        model: "audit_event_model"
      }
    },
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_id",
      autoIncrement: false
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subject_id",
      autoIncrement: false
    },
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_subject_id",
      autoIncrement: false
    },
    role_name: {
      type: DataTypes.CHAR(200),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "role_name",
      autoIncrement: false
    },
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "event_crf_id",
      autoIncrement: false
    },
    study_event_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_event_id",
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
    study_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_crf_id",
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
    }
  };
  const options = {
    tableName: "audit_event_context",
    comment: "",
    indexes: [{
      name: "i_audit_event_context_study_id",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "i_audit_event_context_study_id",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "i_audit_event_context_study_id",
      unique: false,
      fields: ["study_id"]
    }]
  };
  const AuditEventContextModel = sequelize.define("audit_event_context_model", attributes, options);
  return AuditEventContextModel;
};