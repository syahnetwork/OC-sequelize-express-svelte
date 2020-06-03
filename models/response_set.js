const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    response_set_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "response_set_id",
      autoIncrement: true
    },
    response_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "response_type_id",
      autoIncrement: false,
      references: {
        key: "response_type_id",
        model: "response_type_model"
      }
    },
    label: {
      type: DataTypes.CHAR(80),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "label",
      autoIncrement: false
    },
    options_text: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "options_text",
      autoIncrement: false
    },
    options_values: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "options_values",
      autoIncrement: false
    },
    version_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "version_id",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "response_set",
    comment: "",
    indexes: []
  };
  const ResponseSetModel = sequelize.define("response_set_model", attributes, options);
  return ResponseSetModel;
};