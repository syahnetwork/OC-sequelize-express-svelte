const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    export_format_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "export_format_id",
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
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    mime_type: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "mime_type",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "export_format",
    comment: "",
    indexes: []
  };
  const ExportFormatModel = sequelize.define("export_format_model", attributes, options);
  return ExportFormatModel;
};