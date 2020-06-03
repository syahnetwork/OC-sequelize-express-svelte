const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    archived_dataset_file_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "archived_dataset_file_id",
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
    dataset_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "dataset_id",
      autoIncrement: false,
      references: {
        key: "dataset_id",
        model: "dataset_model"
      }
    },
    export_format_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "export_format_id",
      autoIncrement: false,
      references: {
        key: "export_format_id",
        model: "export_format_model"
      }
    },
    file_reference: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "file_reference",
      autoIncrement: false
    },
    run_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "run_time",
      autoIncrement: false
    },
    file_size: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "file_size",
      autoIncrement: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_created",
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
    format: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "format",
      autoIncrement: false
    },
    status: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "status",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "archived_dataset_file",
    comment: "",
    indexes: []
  };
  const ArchivedDatasetFileModel = sequelize.define("archived_dataset_file_model", attributes, options);
  return ArchivedDatasetFileModel;
};