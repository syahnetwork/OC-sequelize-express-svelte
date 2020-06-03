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
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_id",
      autoIncrement: false,
      references: {
        key: "study_id",
        model: "study_model"
      }
    },
    study: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "1",
      comment: null,
      primaryKey: false,
      field: "study",
      autoIncrement: false
    },
    crf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "1",
      comment: null,
      primaryKey: false,
      field: "crf",
      autoIncrement: false
    },
    event_definition: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "1",
      comment: null,
      primaryKey: false,
      field: "event_definition",
      autoIncrement: false
    },
    subject_group: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "1",
      comment: null,
      primaryKey: false,
      field: "subject_group",
      autoIncrement: false
    },
    rule: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "1",
      comment: null,
      primaryKey: false,
      field: "rule",
      autoIncrement: false
    },
    site: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "1",
      comment: null,
      primaryKey: false,
      field: "site",
      autoIncrement: false
    },
    users: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "1",
      comment: null,
      primaryKey: false,
      field: "users",
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
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "owner_id",
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
    }
  };
  const options = {
    tableName: "study_module_status",
    comment: "",
    indexes: []
  };
  const StudyModuleStatusModel = sequelize.define("study_module_status_model", attributes, options);
  return StudyModuleStatusModel;
};