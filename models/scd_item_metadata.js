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
    scd_item_form_metadata_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "scd_item_form_metadata_id",
      autoIncrement: false,
      references: {
        key: "item_form_metadata_id",
        model: "item_form_metadata_model"
      }
    },
    control_item_form_metadata_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "control_item_form_metadata_id",
      autoIncrement: false,
      references: {
        key: "item_form_metadata_id",
        model: "item_form_metadata_model"
      }
    },
    control_item_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "control_item_name",
      autoIncrement: false
    },
    option_value: {
      type: DataTypes.CHAR(500),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "option_value",
      autoIncrement: false
    },
    message: {
      type: DataTypes.CHAR(3000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "message",
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
    }
  };
  const options = {
    tableName: "scd_item_metadata",
    comment: "",
    indexes: []
  };
  const ScdItemMetadataModel = sequelize.define("scd_item_metadata_model", attributes, options);
  return ScdItemMetadataModel;
};